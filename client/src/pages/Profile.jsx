import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" max-w-lg mx-auto p-3">
      <h1 className="text-3xl font-semibold my-7 text-center">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full w-24 object-cover cursor-pointer self-center"
        />
        <input
          type="text"
          placeholder="username"
          className="border rounded-md p-3"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border rounded-md p-3"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border rounded-md p-3"
          id="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-2">
        <span className="text-red-700 cursor-pointer">Delete Account ?</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
