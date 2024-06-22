import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Store/Auth";


const Forget = () => {
  const toggleForgetState = useSelector((state) => state.auth.toggleForget);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {toggleForgetState && (
        <div className="min-h-screen flex flex-col justify-center items-center p-12">
          <div className="bg-white border rounded-2xl p-10 shadow-lg max-w-md mx-auto">
            <h1 className="text-orange-500 text-4xl font-bold font-serif">
              foodiv
            </h1>
            <h3 className="pb-2 font-bold text-xl">Forgot Password</h3>
            <form onSubmit={handleSubmit}>
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
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3 3 0 0 0 3-3.001M6.75 12c0 1.656-1.343 3-3 3m3-3a3 3 0 0 1 3-3"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="w-full outline-none"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
              >
                Submit
              </button>
            </form>
            <div className="text-center mt-4">
              Remember your password?{" "}
              <p
                onClick={() => dispatch(authAction.toggleForget())}
                className="text-blue-500 hover:underline"
              >
                Back to Login
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Forget;
