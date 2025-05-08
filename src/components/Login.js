import { useState } from "react";
import Header from "./Header"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSIgnInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/US-en-20250505-TRIFECTA-perspective_6d57e1b1-9193-4f6d-8cff-8dfb51cc3612_small.jpg"
                    alt="Netflix Logo" />
            </div>
            <form className="absolute bg-black p-4 m-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <h1 className="text-white text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder="Full Name" className='w-full h-12 bg-gray-200 rounded-md p-2 mt-4 bg-gray-500 text-white outline-0' />}
                <input type='text' placeholder="Email Address" className='w-full h-12 bg-gray-200 rounded-md p-2 mt-4 bg-gray-500 text-white outline-0' />
                <input type='password' placeholder="Password" className='w-full h-12 bg-gray-200 rounded-md p-2 mt-4 bg-gray-500 text-white outline-0' />
                <button className='w-full h-12 bg-red-600 rounded-md p-2 mt-4 text-white font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className="text-gray-500 text-sm mt-4 cursor-pointer" onClick={toggleSIgnInForm}>
                    <span> {isSignInForm ? "New to Netflix? Sign up now" : "ALready regfistered SignIn Now"}</span>
                </div>
            </form>
        </div>
    )
}

export default Login