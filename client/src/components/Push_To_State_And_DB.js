// Push_To_State_And_DB.js
import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Push_To_State_And_DB = () => {
    const { userData } = useContext(DataContext);
    const preLink = "https://user.saudichamberes.org/DocumentVerify/";
    const navigate = useNavigate();

    // To Upload The PDF
    const [file, setFile] = useState();
    const formData = new FormData();

    // const handleSendInput = async (e) => {
    const handleSendInput = async (e) => {
        e.preventDefault();
        formData.append('filename', file);
        formData.append('customID', userData.operationNumber);
        formData.append('operationNumber', userData.operationNumber);
        formData.append('subscriberNameEN', userData.subscriberNameEN)
        formData.append('applicantNameEN', userData.applicantNameEN)
        formData.append('subscriberNumber', userData.subscriberNumber)
        formData.append('subscriberNameAR', userData.subscriberNameAR)
        formData.append('applicantNameAR', userData.applicantNameAR)
        formData.append('crNumber', userData.crNumber)
        formData.append('telephone', userData.telephone)
        formData.append('date', userData.date)
        formData.append('idNumber', userData.idNumber)
        formData.append('qrCodeData', preLink + userData.operationNumber)
        formData.append('editorContent', userData.editorContent)
        formData.append('unifiedNumber', userData.unifiedNumber)
        formData.append('employeeNumber', userData.employeeNumber)
        try {
            await axios.post("https://saudichamberes.org/api/send-input", formData, {
                headers: { "Content-Type": "Multipart/form-data" },
            }).then(response => {
                console.log(response.data);
                console.log(response);
            });
        } catch (error) {
            console.error("Error sending input:", error);
        }
        navigate(`/DocumentVerify/${userData.operationNumber}`);
    };

    return (
        <div className='flex flex-col items-center gap-2'>
            <h1>Uploads Page</h1>
            <p>operationNumber: {userData.operationNumber}</p>
            <p>subscriberNameEN: {userData.subscriberNameEN}</p>
            <p>applicantNameEN: {userData.nameApplicantEN}</p>
            <p>subscriberNumber: {userData.subscriberNumber}</p>
            <p>subscriberNameAR: {userData.subscriberNameAR}</p>
            <p>applicantNameAR: {userData.applicantNameAR}</p>
            <p>crNumber: {userData.crNumber}</p>
            <p>telephone: {userData.telephone}</p>
            <p>date: {userData.date}</p>
            <p>idNumber: {userData.idNumber}</p>
            <p>unifiedNumber: {userData.unifiedNumber}</p>
            <p>employeeNumber: {userData.employeeNumber}</p>
            <p>qrCodeData: {userData.operationNumber}</p>
            <p>Content: {userData.editorContent}</p>

            <form className='mb-20' onSubmit={handleSendInput}>
                <h1>Upload Pdf Files</h1>
                <input
                    type='file'
                    accept='application/pdf'
                    name='filename'
                    required
                    onChange={(e) => setFile(e.target.files[0])} />

                <button className='bg-blue-500 rounded-xl py-1 px-2 text-white' type='submit'>Upload</button>
            </form>
            {/* <button className='bg-black px-10 py-5 rounded-xl text-white text-lg border-2 ' onClick={handleSendInput}>اخبط</button> */}
        </div>
    );
};

export default Push_To_State_And_DB;