import { Provider } from "react-redux";
import store from "./Store/index.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,

// } from "react-router-dom";
// import Login from "./Components/Auth/Login.jsx";
// import Signup from "./Components/Auth/Signup.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Signup/>}/>
//       <Route path="/login" element={<Login />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <App/>
    </Provider>
  </React.StrictMode>
);
