import { useContext, useRef } from "react";
import QRCode from "react-qr-code";
import { Editor } from "@tinymce/tinymce-react";
import { DataContext } from './DataContext';
import { useNavigate } from "react-router-dom";

const FormPageLTest = () => {
    const { userData, setUserData } = useContext(DataContext);
    // const [editorContent, setEditorContent] = useState("");
    const editorRef = useRef(null);
    const preLink = "https://user.saudichamberes.org/DocumentVerify/";
    const navigate = useNavigate();

    const handleChane = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const editor = editorRef.current.editor;
        navigate("/previow")
    }
    const handleEditorChange = (content, editor) => {
        // setEditorContent(content);
        console.log(editor);
        setUserData({ ...userData, editorContent: content });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Right Col */}

                    <div className="flex justify-center w-full">
                        <div className="w-full p-10  ">
                            <div className="grid grid-cols-2 gap-10 justify-items-center ">
                                <div className="flex flex-col items-start w-full">
                                    <label className="">Request Number:</label>
                                    <input
                                        className="p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"operationNumber"}
                                        placeholder="Digit Number From 7"
                                        onChange={handleChane}
                                    />
                                </div>
                                <div className="flex flex-col items-end w-full">
                                    <label className="">:رقم الإشتراك</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"subscriberNumber"}
                                        placeholder="رقم مكون من 6 خانات"
                                        onChange={handleChane}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-10 justify-items-center ">
                                <div className="flex flex-col items-start w-full">
                                    <label className="">Subscriber Name:</label>
                                    <input
                                        className="p-2 px-4 rounded-md w-full  border-[1px] border-black"
                                        name={"subscriberNameEN"}
                                        placeholder="Company Name in English"
                                        onChange={handleChane}
                                    />
                                </div>
                                <div className="flex flex-col items-end w-full">
                                    <label className="">:اسم المشترك</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"subscriberNameAR"}
                                        placeholder="اسم الشركة أو المؤسسة بالعربية"
                                        onChange={handleChane}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-10 justify-items-center ">
                                <div className="flex flex-col items-start w-full">
                                    <label className="">Applicant Name:</label>
                                    <input
                                        className="p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"applicantNameEN"}
                                        placeholder="Applicant Name in English"
                                        onChange={handleChane}
                                    />
                                </div>
                                <div className="flex flex-col items-end w-full">
                                    <label className="">:اسم مقدم الطلب</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"applicantNameAR"}
                                        placeholder="اسم مقدم الطلب بالعربية"
                                        onChange={handleChane}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-end ">
                                <div className="w-[35.2em] flex flex-col items-end ">
                                    <label className="">:السجل التجاري</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"crNumber"}
                                        placeholder="رقم السجل التجاري من 10 أرقام يبدأ ب4030"
                                        onChange={handleChane}
                                    />

                                    <label className="">:الهاتف</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"telephone"}
                                        placeholder="رقم تليفون مكون من 7 أرقام يبدأ بـ6"
                                        onChange={handleChane}
                                    />

                                    <label className="">:التاريخ</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"date"}
                                        placeholder="صيغة التاريخ كالتالي: سنة/شهر/يوم مثال 18/07/2024 "
                                        onChange={handleChane}
                                    />

                                    <label className="">:رمز المفوض / رقم الهوية</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"idNumber"}
                                        placeholder="رقم هوية سعودية مكونة من 10 أرقام تبدأ من 10"
                                        onChange={handleChane}
                                    />

                                    <label className="">:الرقم الموحد</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"unifiedNumber"}
                                        placeholder="رقم مكون من 10 أرقام تبدأ من 70"
                                        onChange={handleChane}
                                    />

                                    <label className="">:رقم الموظف</label>
                                    <input
                                        className="text-right p-2 px-4 rounded-md w-full border-[1px] border-black"
                                        name={"employeeNumber"}
                                        placeholder="رقم مكون من 4 أرقام"
                                        onChange={handleChane}
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
                                >
                                    التالي
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex flex-col  justify-center gap-2 absolute bottom-[43rem] left-20">
                            <input
                                className="border-2 rounded-md w-[30rem] p-2 px-4"
                                type="text"
                                value={preLink + userData.operationNumber}
                            />
                            <QRCode className="ml-24" value={preLink + userData.operationNumber} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormPageLTest;
