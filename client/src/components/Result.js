import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PdfViewer from './PdfViewer';
import Loader from './Loader'; // Import the Loader component
import { getDoc } from "./Data";
import houseIcon from '../assets/images/house.png'
import arrouwIcon from '../assets/images/left_arrow.png'

const Result = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const doc = getDoc(parseInt(params.id));

    return (
        <>

            <div className="flex flex-col gap-10 bg-[#eeeeef] py-10 md:px-16">
                <h1 className="text-5xl space-x-11 text-black text-right font-bold">الإستعلام عن الوثيقة</h1>
                <div className="flex justify-end items-center gap-2">
                    <h1 className="text-[#b3b6bb]">الإستعلام عن الوثيقة</h1>
                    <img className="h-4 w-4" src={arrouwIcon} />
                    <h1 className="text-[#6e7178]">الرئيسية</h1>
                    <img className="h-4 w-4" src={houseIcon} />
                </div>
            </div>

            <div className="flex flex-col bg-white py-10 md:px-16">
                <h1 className="text-mainBlue text-3xl font-bold text-right my-10">نتيجة البحث</h1>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <div className="flex justify-center items-center h-screen">
                        <p>Error loading PDF. <a href={doc.File}>Download the PDF</a>.</p>
                    </div>
                ) : (
                    <div className="w-full h-screen overflow-auto">
                        <PdfViewer pdfUrl={doc.File} />
                    </div>
                )}
            </div>

        </>
    );
}

export default Result;
