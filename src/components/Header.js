import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { showGptSearch } = useSelector((state) => state.gpt);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-transparent w-full z-10 flex justify-between items-center">
      <img
        src={LOGO}
        alt="Netflix Logo"
        className="w-44"
        onClick={navigate("/")}
      />
      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="px-4 py-2 bg-white text-black mr-3 rounded-md outline-none"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="px-4 py-2 bg-purple-800 text-white mr-3 rounded-md"
            onClick={handleGPTSearch}
          >
            {showGptSearch ? "Home Page" : " GPT Search"}
          </button>
          <img src={user?.photoURL} alt="user icon" className="w-10 h-10" />
          <button
            className="font-bold size-4 text-white w-24"
            onClick={handleSignout}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
