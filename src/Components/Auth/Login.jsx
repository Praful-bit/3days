/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import Forget from "./Forget";
import Signup from "./Signup";
import { authAction } from "../../Store/Auth";

const Login = () => {
  const toggle = useSelector((state) => state.auth.toggleAuth);
  const toggleForget = useSelector((state) => state.auth.toggleForget);
  const dispatch = useDispatch();

  return (
    <>
      {toggle ? (
        <>
          {toggleForget ? (
            <Forget />
          ) : (
            <div className="min-h-screen flex flex-col justify-center p-12">
              <div className="bg-white border rounded-2xl p-6 shadow-lg max-w-md mx-auto">
                <h1 className="font-serif text-4xl font-bold text-orange-500 text-center mb-4">
                  foodiv
                </h1>
                <h3 className="text-lg text-center mb-2">
                  Sign in to your account
                </h3>
                <h6 className="text-gray-400 text-center mb-6">
                  Enter your Email/Mobile number and password to continue
                </h6>
                <form>
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
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="w-full outline-none"
                        placeholder="Email/Mobile number"
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
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
                  >
                    Sign In
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p
                    className="text-blue-500 hover:underline"
                    onClick={() => dispatch(authAction.toggleForget())}
                  >
                    Forgot Password?
                  </p>
                </div>
                <div className="text-center mt-2">
                  Don't have an account?{" "}
                  <p
                    onClick={() => dispatch(authAction.toggleAuth())}
                    className="text-blue-500 hover:underline"
                  >
                    Sign up
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default Login;
