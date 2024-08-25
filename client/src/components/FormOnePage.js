import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

const FormOnePage = () => {
  const preLink = "http://user.saudichamberes.org/DocumentVerify/";
  // const [customId, setCustomId] = useState("");
  const [operationNumber, setOperationNumber] = useState("");
  const [subscriberNameEN, setSubscriberNameEN] = useState("");
  const [applicantNameEN, setApplicantNameEN] = useState("");
  const [subscriberNumber, setSubscriberNumber] = useState("");
  const [subscriberNameAR, setSubscriberNameAR] = useState("");
  const [applicantNameAR, setApplicantNameAR] = useState("");
  const [crNumber, setCrNumber] = useState("");
  const [telephone, setTelephone] = useState("");
  const [date, setDate] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const [editorContent, setEditorContent] = useState("");
  const editorRef = useRef(null);

  const handleOperationNumber = (e) => {
    setOperationNumber(e.target.value);
  };

  const handleSubscriberNameEN = (e) => {
    setSubscriberNameEN(e.target.value);
  };

  const handleApplicantNameEN = (e) => {
    setApplicantNameEN(e.target.value);
  };

  const handleSubscriberNumber = (e) => {
    setSubscriberNumber(e.target.value);
  };

  const handleSubscriberNameAR = (e) => {
    setSubscriberNameAR(e.target.value);
  };

  const handleApplicantNameAR = (e) => {
    setApplicantNameAR(e.target.value);
  };

  const handleCrNumber = (e) => {
    setCrNumber(e.target.value);
  };

  const handleTelephone = (e) => {
    setTelephone(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleidNumber = (e) => {
    setIdNumber(e.target.value);
  };

  const handleSendInput = async () => {
    try {
      await axios.post("https://saudichamberes.org/api/send-input", {
        customId: operationNumber,
        operationNumber: operationNumber,
        subscriberNameEN: subscriberNameEN,
        applicantNameEN: applicantNameEN,
        subscriberNumber: subscriberNumber,
        subscriberNameAR: subscriberNameAR,
        applicantNameAR: applicantNameAR,
        crNumber: crNumber,
        telephone: telephone,
        date: date,
        idNumber: idNumber,
        qrCodeData: preLink + operationNumber,
        editorContent: editorContent,
      });
      setOperationNumber("");
      setSubscriberNameEN("");
      setApplicantNameEN("");
      setSubscriberNumber("");
      setSubscriberNameAR("");
      setApplicantNameAR("");
      setCrNumber("");
      setTelephone("");
      setDate("");
      setIdNumber("");
      setEditorContent("");
      const editor = editorRef.current.editor;
      // editor.setContent("This is the initial content of the editor.");
    } catch (error) {
      console.error(error);
      // console.error("Error sending input:", error);
    }
  };

  const handleEditorChange = (content, editor) => {
    console.log("Content changed:", content);
    console.log("what is this? ", editor);
    setEditorContent(content);
  };

  return (
    <>
      <div>
        {/* Right Col */}

        <div className="flex justify-center w-full">
          <div className="w-full p-10  ">
            <div className="grid grid-cols-2 gap-10 justify-items-center ">
              <div className="flex flex-col items-start w-full">
                <label className="">Operation Number:</label>
                <input
                  className="p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={operationNumber}
                  onChange={handleOperationNumber}
                />
              </div>
              <div className="flex flex-col items-end w-full">
                <label className="">:رقم الإشتراك</label>
                <input
                  className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={subscriberNumber}
                  onChange={handleSubscriberNumber}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 justify-items-center ">
              <div className="flex flex-col items-start w-full">
                <label className="">Subscriber Name:</label>
                <input
                  className="p-2 px-4 rounded-md w-full  border-[1px] border-black"
                  value={subscriberNameEN}
                  onChange={handleSubscriberNameEN}
                />
              </div>
              <div className="flex flex-col items-end w-full">
                <label className="">:اسم المشترك</label>
                <input
                  className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={subscriberNameAR}
                  onChange={handleSubscriberNameAR}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 justify-items-center ">
              <div className="flex flex-col items-start w-full">
                <label className="">Applicant Name:</label>
                <input
                  className="p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={applicantNameEN}
                  onChange={handleApplicantNameEN}
                />
              </div>
              <div className="flex flex-col items-end w-full">
                <label className="">:اسم مقدم الطلب</label>
                <input
                  className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={applicantNameAR}
                  onChange={handleApplicantNameAR}
                />
              </div>
            </div>

            <div className="flex flex-col items-end ">
              <div className="w-[35.2em] flex flex-col items-end ">
                <label className="">:السجل التجاري</label>
                <input
                  className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={crNumber}
                  onChange={handleCrNumber}
                />

                <label className="">:الهاتف</label>
                <input
                  className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={telephone}
                  onChange={handleTelephone}
                />

                <label className="">:التاريخ</label>
                <input
                  className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={date}
                  onChange={handleDate}
                />

                <label className="">:رمز المفوض / رقم الهوية</label>
                <input
                  className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                  value={idNumber}
                  onChange={handleidNumber}
                />
              </div>
            </div>
            <div className="flex flex-col my-12">
              <h1 className="text-center font-bold text-2xl mb-3">
                ادخل محتوى الرسالة
              </h1>
              <Editor
                apiKey="odw9dsz27tqvl4g97c5m6qed0079ytkh5h3at8cjcsx6nwcp"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>
            <div className="flex justify-center my-10">
              <button
                className="bg-blue-400 px-16 py-2 rounded-lg"
                type="submit"
                onClick={handleSendInput}
              >
                التالي
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col  justify-center gap-2 absolute bottom-[43rem] left-20">
            <inputt
              className="border-2 rounded-md w-[30rem] p-2 px-4"
              type="text"
              value={preLink + operationNumber}
            // onChange={(e) => setQRData(e.target.value)}
            />
            <QRCode className="ml-24" value={preLink + operationNumber} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormOnePage;
