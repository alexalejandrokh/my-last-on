import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import navLoader from '../assets/images/loader.png'
import Loader from "./Loader";
import PdfViewer from "./PdfViewer";
import { PDFViewer } from "@react-pdf/renderer";
import PdfVviower from "./PdfVviower";

const Display = () => {
    const [subscriber, setSubscriber] = useState("");
    const { id } = useParams();
    // const editorContent = subscriber.editorContent;
    // const sanitizedData = DOMPurify.sanitize(editorContent);

    const [loading,] = useState(false);
    const [error,] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/see/${id}`);
                setSubscriber(response.data || "No input received yet.");
                console.log("This is with .data : " + JSON.stringify(response.data));
                console.log("Only Response : " + JSON.stringify(response));

            } catch (error) {
                console.error("Error fetching received input:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-end bg-gradient-to-r  from-green-600 to-blue-700">
                <img className="h-10 w-10" src={navLoader} />
            </div>

            <div className="hidden md:flex justify-end me-10 mt-10 mb-24 text-[#575a61] font-bold">
                <div className="grid grid-cols-7 gap-10 items-end">
                    <div className="flex flex-col items-end gap-3">
                        <h1>مقدم الطلب</h1>
                        <h1 className="text-black font-normal">{subscriber.applicantNameAR}</h1>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <h1>رقم الإشتراك</h1>
                        <h1 className="text-black font-normal">{subscriber.subscriberNumber}</h1>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <h1>رقم السجل التجاري</h1>
                        <h1 className="text-black font-normal">{subscriber.crNumber}</h1>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <h1>اسم المنشأة</h1>
                        <h1 className="text-black font-normal">{subscriber.subscriberNameAR}</h1>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <h1>حالة الوثيقة</h1>
                        <h1 className="text-black font-normal">سارية</h1>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <h1> تاريخ الإنشاء</h1>
                        <h1 className="text-black font-normal">{subscriber.date}</h1>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <h1 h1 > رقم الوثيقة</h1>
                        <h1 className="text-black font-normal">{subscriber.operationNumber}</h1>
                    </div>

                </div>
            </div>

            <div className="flex flex-col bg-white w-full">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <div className="flex justify-center items-center h-screen">
                        <p>Error loading PDF. <a href={subscriber.filename}>Download the PDF</a>.</p>
                    </div>
                ) : (
                    <div className="w-full h-screen">
                        <PdfViewer pdfUrl={`http://localhost:5000/files/${subscriber.filename}`} />
                        {/* <PdfVviower pdfUrl={`http://localhost:5000/files/${subscriber.filename}`} /> */}
                    </div>
                )}
            </div>
        </>
    );
};

export default Display;