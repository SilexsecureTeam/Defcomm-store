import React from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { LuCheck } from "react-icons/lu";

const PasswordLoginForm = ({
  inputValue,
  LoginChange,
  passwordChange,
  passwordeye,
  setPasswordEye,
}) => (
  <>
    <div className="my-2">
      <label htmlFor="password" className="block">
        Password:
      </label>
      <div className="flex justify-between items-center border rounded-xl py-1 border-gray-300">
        <input
          type={passwordeye ? "text" : "password"}
          id="password"
          name="password"
          value={inputValue.password}
          onChange={LoginChange}
          className="text-sm font-medium w-full px-4 outline-none py-2"
          placeholder="********"
        />
        <div className="flex px-2">
          <div className="text-lg text-lime-700 mx-2">
            <LuCheck />
          </div>
          <div
            onClick={() => setPasswordEye(!passwordeye)}
            className="text-lg cursor-pointer"
          >
            {passwordeye ? <GoEye /> : <GoEyeClosed />}
          </div>
        </div>
      </div>
    </div>
    <p className="text-xs mb-4">8+ character</p>
    <button
      type="button"
      className="w-full bg-[#36460A] text-white py-3 rounded-xl hover:bg-[#2e360c]"
      onClick={passwordChange}
    >
      Login
    </button>
    <label className="flex items-center gap-2 text-xs my-4">
      <input type="checkbox" />
      Remember Me
    </label>
  </>
);

export default PasswordLoginForm;
