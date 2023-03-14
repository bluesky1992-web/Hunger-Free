import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false)

  // console.log(auth.currentUser.email)
  
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsRegistrationSuccessful(true)
      const timer = setTimeout(() => {
        return navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      signIn();
    }}
      className="max-w-sm mt-[10%] mx-auto p-4 bg-white shadow-md rounded-md mb-[20vh]"
    >
      {isRegistrationSuccessful && (
        <p className="text-green-600 mb-4">Registration successful!</p>
      )}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-medium"
        >
          Email:
        </label>

        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mt-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-medium"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mt-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
        Sign in
      </button>
    </form>
  );
};
