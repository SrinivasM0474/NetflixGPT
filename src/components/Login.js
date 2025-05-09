import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSIgnInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      name.current?.value,
    );
    setErrorMessage(message);
    if (message) return;

    //sign in or sign up
    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/59592038?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log("sign up user", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "---" + errorMessage);
        });
    } else {
      //sign
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("sign in user", user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "---" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/US-en-20250505-TRIFECTA-perspective_6d57e1b1-9193-4f6d-8cff-8dfb51cc3612_small.jpg"
          alt="Netflix Logo"
        />
      </div>
      <form
        className="absolute bg-black p-4 m-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-4/12"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="w-full h-12 rounded-md p-2 mt-4 bg-gray-500 text-white outline-0"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="w-full h-12 rounded-md p-2 mt-4 bg-gray-500 text-white outline-0"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full h-12 rounded-md p-2 mt-4 bg-gray-500 text-white outline-0"
        />
        {errorMessage && (
          <div className="text-red-600 font-semibold text-md mt-4">
            {errorMessage}
          </div>
        )}
        <button
          className="w-full h-12 bg-red-600 rounded-md p-2 mt-4 text-white font-bold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div
          className="text-gray-500 text-sm mt-4 cursor-pointer"
          onClick={toggleSIgnInForm}
        >
          <span>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "ALready regfistered SignIn Now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
