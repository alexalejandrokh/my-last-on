import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyDocument from "./components/MyDocument";
import ShowIt from "./components/ShowIt";
import TextEditorTest from "./components/TextEditorTest";
import InputSend from "./components/InputSend";
import InputReceive from "./components/InputReceive";
import FormOnePage from "./components/FormOnePage";
import UploadFile from "./components/UploadFile";
import UploadFile2 from "./components/UploadFile2";
import { DataContext, DataProvider } from "./components/DataContext";
import FormPageLTest from "./components/FormPageLTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
// new way
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);


// OLD IS GOLD

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/textEditor" element={<TextEditorTest />}></Route> */}
//         {/* <Route path="/upload" element={<UploadFile />}></Route> */}
//         {/* <Route path="/upload2" element={<UploadFile2 />}></Route> */}
//         {/* <Route path="/FormOnePage" element={<FormOnePage />}></Route> */}
//         {/* <Route path="/FormOnePageTest" element={<FormPageLTest />}></Route> */}
//         {/* <Route path="/inputSend" element={<InputSend />}></Route> */}
//         {/* <Route path="/InputReceive/:id" element={<InputReceive />}></Route> */}
//         <Route path="/" element={<ShowIt />} />
//         {/* <Route path="/" element={<App />}></Route> */}
//         <Route path="/DocumentVerify"></Route>
//         <Route path="/DocumentVerify/:id" element={<App />}></Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
