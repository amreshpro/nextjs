"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  // on submit form
  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-2xl">Signup</h1>
      <hr />
      <label htmlFor="username" className="">
        username
      </label>
      <input
        type="text"
        id="username"
        value={user.username}
        onInput={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="py-2 px-2  focus:outline-none focus:border-gray-700 rounded-lg"
      />

<label htmlFor="email" className="">
        email
      </label>
      <input
        type="text"
        id="email"
        value={user.email}
        onInput={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="py-2 px-2  focus:outline-none focus:border-gray-700 rounded-lg"
      /> <label htmlFor="password" className="">
      password
    </label>
    <input
      type="text"
      id="password"
      value={user.password}
      onInput={(e) => setUser({ ...user, password: e.target.value })}
      placeholder="password"
      className="py-2 px-2  focus:outline-none focus:border-gray-700 rounded-lg"
    />

k

<button onClick={onSignup} className=" mt-4 p-2 border border-gray-300  rounded-lg  mb-4 focus:outline-none focus:border-gray-600 ">Signup</button>
    
 <p> Already a user  <Link href="/login" className="text-blue-400 underline">Login</Link></p>
    </div>
  );
};
export default SignupPage;
