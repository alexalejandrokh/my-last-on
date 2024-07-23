import React, { useState, useContext } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import leftItem from "../assets/images/logo.png";
import rightItem from "../assets/images/jcciNavbarLogo.png";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { DataContext } from "./DataContext";

const PreviewAndDownload = () => {
    const { userData } = useContext(DataContext);
    const navigate = useNavigate();
    const [subscriber] = useState("");
    const editorContent = subscriber.editorContent;
    const sanitizedData = DOMPurify.sanitize(editorContent);
    // const preLink = "https://user.saudichamberes.org/DocumentVerify/";
    const preLink = "http://user.saudichamberes.org/DocumentVerify/";

    const downloadPdf = () => {
        const capture = document.querySelector('.entire_page');

        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const componentWidth = pdf.internal.pageSize.getWidth();
            const componentHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            pdf.save(userData.operationNumber);
        })
    }
    const next = () => {
        navigate("/submit");
    }
    const prev = () => {
        navigate("/dataEntery");
    }
    return (
        <>

            <div className="relative w-[2480px] h-[3508px] flex justify-center entire_page">
                <div className="flex flex-col w-full p-4">
                    {/* Header Part Logos */}
                    <div className="flex justify-between">
                        <img className="h-[400px] w-[400px]" src={leftItem} alt="leftImage" />
                        <img
                            className="h-[126.5px] w-[413px] mt-[115px] mr-[50px]"
                            src={rightItem}
                            alt="rightItem"
                        />
                    </div>


                    {/* Testing With Gride */}
                    <div className="bg-[#F6F7FA] mx-16 p-10 text-3xl rounded-lg">

                        <div className="grid grid-cols-5 items-center">
                            {/* 1st Col English*/}
                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold">{userData.subscriberNameEN}</h1>
                                <div className="flex gap-2">
                                    <h1>Applicant :</h1>
                                    <h1>{userData.applicantNameEN}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>Subscriber ID :</h1>
                                    <h1>{userData.idNumber}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>C.R :</h1>
                                    <h1>{userData.crNumber}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>Date :</h1>
                                    <h1>{userData.date}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>Employee :</h1>
                                    <h1>{userData.employeeNumber}</h1>
                                </div>

                            </div>

                            {/* 2nd Col English*/}
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2">
                                    <h1>Unified Number :</h1>
                                    <h1>{userData.unifiedNumber}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>Phone Number :</h1>
                                    <h1>{userData.telephone}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>Request Number :</h1>
                                    <h1>{userData.operationNumber}</h1>
                                </div>

                            </div>

                            {/* 3rd Col QR Code*/}
                            <div className="flex justify-center">
                                <div className="flex justify-center items-center bg-white w-[200px] h-[200px]">
                                    <QRCode className="w-[190px] h-[190px]" value={preLink + userData.operationNumber} />
                                </div>

                            </div>

                            {/* 4th Col Arabic*/}
                            <div className="flex flex-col justify-end justify-items-end items-end gap-3">
                                <div className="flex gap-2">
                                    <h1>{userData.unifiedNumber}</h1>
                                    <h1>: الرقم الموحد</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>{userData.telephone}</h1>
                                    <h1>: رقم الهاتف</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>{userData.date}</h1>
                                    <h1>: التاريخ</h1>
                                </div>

                            </div>

                            {/* 5th Col Arabic*/}
                            <div className="flex flex-col gap-3 items-end">
                                <h1 className="font-bold">{userData.subscriberNameAR}</h1>
                                <div className="flex gap-2">
                                    <h1>{userData.applicantNameAR}</h1>
                                    <h1>: مقدم الطلب</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>{userData.subscriberNumber}</h1>
                                    <h1>: رقم الإشتراك</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>{userData.crNumber}</h1>
                                    <h1>: السجل التجاري</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>{userData.operationNumber}</h1>
                                    <h1>: رقم الطلب</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1>{userData.employeeNumber}</h1>
                                    <h1>: الموظف</h1>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* 6th Letter Content*/}
                    <div className=" mx-14 text-4xl">
                        <div className="mt-10" dangerouslySetInnerHTML={{ __html: userData.editorContent }} />
                        <div className="mt-5">{parse(sanitizedData)}</div>
                    </div>

                    {/*Old Footer Bottom */}
                    {/* <div className="absolute bottom-5 bg-[#F6F7FA] flex flex-col justify-end font-semibold py-2 px-4 rounded-lg mt-5">
                        <h1 className="text-right">
                            هذه الوثيقة قد تم إصدارها دون أدنى مسؤولية على الغرفة من خلال نظام الخدمات الإلكترونية لاتحاد الغرف السعودية و أي إضافة أو كشط أو
                        </h1>
                        <div className="flex justify-end gap-2">
                            <h1>https://user.saudichambers.sa/home</h1>
                            <h1 className="text-right">
                                تعديل على الوثيقة تعتبر لاغية وللتحقق من محتواها يرجى زيارة الموقع الإلكتروني
                            </h1>
                        </div>
                    </div> */}

                    <div className="flex mx-14 mb-20 mt-44 text-3xl">

                        <h1>-----------------------------------------------------------------------------------------</h1>
                        <h1> انتهى الخطاب </h1>
                        <h1>-------------------------------------------------------------------------------------------</h1>
                    </div>

                    {/*New Footer Bottom */}
                    <div className=" bg-[#F6F7FA] flex flex-col justify-end text-4xl gap-4 rounded-lg mx-16 p-10">
                        <h1 className="text-right">
                            هذه الوثيقة قد تم إصدارها دون أدنى مسؤولية على الغرفة من خلال نظام الخدمات الإلكترونية لاتحاد الغرف السعودية و أي إضافة أو كشط أو
                        </h1>
                        <div className="flex justify-end gap-2">
                            <h1>https://user.saudichambers.sa/home</h1>
                            <h1 className="text-right">
                                تعديل على الوثيقة تعتبر لاغية وللتحقق من محتواها يرجى زيارة الموقع الإلكتروني
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center gap-28">
                <button className="rounded-lg text-white bg-blue-500 font-bold text-3xl py-1 px-4 my-28" onClick={next}>التالي</button>
                <button className="rounded-lg text-white bg-red-600 font-bold text-3xl py-1 px-4 my-28" onClick={downloadPdf}>تحميل واستعراض الملف</button>
                <button className="rounded-lg text-white bg-gray-500 font-bold text-3xl py-1 px-4 my-28" onClick={prev}>السابق</button>
            </div>

        </>
    );
};

export default PreviewAndDownload;