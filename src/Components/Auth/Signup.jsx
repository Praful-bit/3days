/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Store/Auth";
import Login from "./Login";

const Signup = () => {
  const url = import.meta.env.VITE_SIGNUP_URL;
  const key = import.meta.env.VITE_API_KEY;
  const [resName, setResName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const toggle = useSelector((state) => state.auth.toggleAuth);
  const dispatch = useDispatch();

  const SignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert("Password do not match!!");
      return;
    }
    try {
      const res = await fetch(`${url}${key}`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      console.log(resData);
    } catch (err) {
      console.log("in signup", err);
    }
    setEmail("");
    setMobile(0);
    setPassword("");
    setResName("");
    setConfirmPass("");
  };

  return (
    <>
      {toggle ? (
        <Login />
      ) : (
        <div className="h-screen flex flex-col justify-center items-center p-12">
          <div className="bg-white border rounded-2xl p-10 shadow-lg w-full mx-auto">
            <h1 className="text-orange-500 text-4xl font-bold font-serif">
              foodiv
            </h1>
            <h3 className="pb-2 font-bold text-xl">Signup</h3>
            <form onSubmit={SignUp}>
              <div className="flex flex-col mb-4">
                <div className="flex items-center border rounded-md px-3 py-2">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="Restaurant name"
                    value={resName}
                    onChange={(e) => setResName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex items-center border rounded-md px-3 py-2">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Enter Your Mobile Number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex items-center border rounded-md px-3 py-2">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="w-full outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Mail Address"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex items-center border rounded-md px-3 py-2">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-8.25A2.25 2.25 0 0 0 18 9.75H6a2.25 2.25 0 0 0-2.25 2.25v8.25a2.25 2.25 0 0 0 2.25 2.25Zm6.75-10.5h-3v3.75h3V11.25Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    className="w-full outline-none"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex items-center border rounded-md px-3 py-2">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-8.25A2.25 2.25 0 0 0 18 9.75H6a2.25 2.25 0 0 0-2.25 2.25v8.25a2.25 2.25 0 0 0 2.25 2.25Zm6.75-10.5h-3v3.75h3V11.25Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    className="w-full outline-none"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gray-500 text-white border px-4 py-2 rounded-3xl hover:bg-sky-700"
              >
                Submit
              </button>
            </form>
            <hr className="mt-2 mb-2" />
            <div>
              You already have an account?
              <p
                onClick={() => dispatch(authAction.toggleAuth())}
                className="text-blue-500 hover:underline"
              >
                Log in
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
