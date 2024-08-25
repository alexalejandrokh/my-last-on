import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import { useParams } from "react-router-dom";
import leftItem from "../assets/images/logo.png";
import rightItem from "../assets/images/jcciNavbarLogo.png";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import stamp from '../assets/images/stamp.png'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const InputReceive = () => {
  const [subscriber, setSubscriber] = useState("");
  const { id } = useParams();
  const editorContent = subscriber.editorContent;
  const sanitizedData = DOMPurify.sanitize(editorContent);
  const preLink = "https://user.saudichamberes.org/DocumentVerify/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://saudichamberes.org/api/see/${id}`);
        setSubscriber(response.data || "No input received yet.");
        console.log("This is with .data : " + JSON.stringify(response.data));
        console.log("Only Response : " + JSON.stringify(response));

      } catch (error) {
        console.error("Error fetching received input:", error);
      }
    };
    fetchData();
  }, []);



  const downloadPdf = () => {
    const capture = document.querySelector('.entire_page');

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const componentWidth = pdf.internal.pageSize.getWidth();
      const componentHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      pdf.save('testing.pdf');
    })
  }
  return (
    <>
      <div className="relative w-[2480px] h-[3508px] flex justify-center entire_page">
        <div className="flex flex-col w-full p-4">
          {/* Header Part Logos */}
          <div className="flex justify-between">
            <img className="h-[80px] w-[80px]" src={leftItem} alt="leftImage" />
            <img
              className="h-[25.3px] w-[82.6px] mt-[15px]"
              src={rightItem}
              alt="rightItem"
            />
          </div>
          <div className="bg-[#F6F7FA]">

            {/* 1st Row Est or Company name*/}
            <div className="flex justify-between text-3xl">
              <div className="w-full flex gap-2">
                <h1>Subscriber ID:</h1>
                <h1>{subscriber.subscriberNumber}</h1>
              </div>
              <div className=" w-full flex justify-end gap-2">
                <h1>{subscriber.subscriberNumber}</h1>
                <h1>:رقم الإشتراك</h1>
              </div>
            </div>

            {/* 2ns Row Name*/}
            <div className="flex justify-between">
              <div className=" w-full flex gap-2">
                <h1>Subscriber Name:</h1>
                <h1>{subscriber.subscriberNameEN}</h1>
              </div>
              <div className=" w-full flex justify-end gap-2">
                <h1>{subscriber.subscriberNameAR}</h1>
                <h1>:اسم المشترك</h1>
              </div>
            </div>

            {/* 3rd Row CR*/}
            <div className="flex justify-between">
              <div className=" w-full flex gap-2">
                <h1>C.R:</h1>
                <h1>{subscriber.crNumber}</h1>
              </div>
              <div className=" w-full flex justify-end gap-2">
                <h1>{subscriber.crNumber}</h1>
                <h1>:السجل التجاري</h1>
              </div>
            </div>

            {/* 4th Row Tel & Fax*/}
            <div className="flex justify-between">
              <div className=" w-full flex gap-2">
                <h1>Tel :</h1>
                <h1>{subscriber.telephone}</h1>
                <h1>Fax :</h1>
                <h1>0</h1>
              </div>
              <div className=" w-full flex justify-end gap-2">
                <h1>0</h1>
                <h1>:فاكس</h1>
                <h1>{subscriber.telephone}</h1>
                <h1>:هاتف</h1>
              </div>
            </div>
            {/* 5th Row Date*/}
            <div className="flex justify-between">
              <div className=" w-full flex gap-2">
                <h1>Date:</h1>
                <h1>{subscriber.data}</h1>
              </div>
              <div className=" w-full flex justify-end gap-2">
                <h1>{subscriber.data}</h1>
                <h1>:التاريخ</h1>
              </div>
            </div>
          </div>
          {/* 6th Letter Content*/}
          {/* <div className="mt-10" dangerouslySetInnerHTML={{ __html: subscriber.editorContent }} /> */}
          <div className="mt-5">{parse(sanitizedData)}</div>
          {/* Footer Top */}

          <div className="absolute bottom-32">


            <div className="flex border-blue-500  flex-row-reverse justify-between border-2 rounded-lg py-1 px-4 ">

              <div className="flex flex-row-reverse gap-10 justify-start items-center">

                <img className="w-32 h-32" src={stamp} alt="stamp" />

                <QRCode className="w-24 h-24" value={preLink + subscriber.qrCodeData} />

                <div className="flex flex-col leading-6">
                  <div className="flex flex-row-reverse gap-2">
                    <h1>:اسم الجهة</h1>
                    <h1>{subscriber.subscriberNameAR}</h1>
                  </div>
                  <div className="flex flex-row-reverse gap-2">
                    <h1>:رقم العملية</h1>
                    <h1>{subscriber.operationNumber}</h1>
                  </div>
                  <div className="flex flex-row-reverse gap-2">
                    <h1>:رقم الإشتراك</h1>
                    <h1>{subscriber.subscriberNumber}</h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-7">
                <div className="flex flex-row-reverse gap-2 leading-6">
                  <h1>:رمز المفوض</h1>
                  <h1>{subscriber.idNumber}</h1>
                </div>
                <div className="flex flex-row-reverse gap-2">
                  <h1>:الإسم</h1>
                  <h1>{subscriber.subscriberNameAR}</h1>
                </div>
              </div>

            </div>
          </div>
          {/* Footer Bottom */}
          <div className="absolute bottom-5 bg-[#F6F7FA] flex flex-col justify-end font-semibold py-2 px-4 rounded-lg mt-5">
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
      <div className="flex justify-center">
        <button className="rounded-lg text-white bg-blue-600 font-bold text-3xl py-1 px-4 my-28" onClick={downloadPdf}>تحميل الملف التجريبي</button>
      </div>
    </>
  );
};

export default InputReceive;
