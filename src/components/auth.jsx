import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth.currentUser.email)

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth,email,password)
  };
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        type='email'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        type='password'
      />
      <button onClick={signIn}>Sign in</button>
    </div>
  );
};
