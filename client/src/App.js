import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPageLTest from "./components/FormPageLTest";
import PreviewAndDownload from "./components/PreviewAndDownload";
import Push_To_State_And_DB from "./components/Push_To_State_And_DB";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Footer from "./components/Footer";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";
import FormOnePage from "./components/FormOnePage";
import InputSend from "./components/InputSend";
import InputReceive from "./components/InputReceive";
import Display from "./components/Display";


function App() {

  // new way
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dataEntery" exact element={<FormPageLTest />} />
        <Route path="/previow" element={<PreviewAndDownload />} />
        <Route path="/submit" element={<Push_To_State_And_DB />} />
        <Route path="/InputReceive" element={<InputReceive />} />
        <Route path="/InputReceive/:id" element={<InputReceive />} />
        <Route path="/DocumentVerify" element={<Display />} />
        <Route path="/DocumentVerify/:id" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );

  // Old Is Gold
  // return (
  //   <div className="p-2 bg-[#ddd] hf">
  //     <Navbar />
  //     {/* <InputSend />
  //     <InputReceive />
  //     <MyDocument /> */}

  //     {/* <PDFViewer>
  //       <MyDocument />
  //     </PDFViewer> */}

  //     {/* <TextEditorTiny /> */}
  //     {/* <FormOnePage /> */}
  //     {/* <YourComponent /> */}


  //     <Result />
  //     <Footer />
  //   </div>
  // );
}

export default App;
