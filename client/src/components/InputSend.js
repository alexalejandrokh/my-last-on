import React, { useState } from 'react';
import axios from 'axios';
import InputReceive from './InputReceive';
import pdf00 from '../assets/pdfs/4490349.pdf'

const InputSend = () => {

    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleTextAreaChange = (e) => {
        setTextAreaValue(e.target.value);
    };

    const handleSendInput = async () => {
        try {
            await axios.post('https://saudichamberes.org/api/send-input', { value: inputValue, textvalue: textAreaValue });
            setInputValue('');
            setTextAreaValue('')
        } catch (error) {
            console.error('Error sending input:', error);
        }
    };
    return (
        <>
            <div>
                <h1>MERN Stack Input System</h1>
                <div className='flex flex-col items-center gap-2 mx-10'>
                    <input placeholder='Input Value Here' className='p-2 border-2 w-full mx-2' type="text" value={inputValue} onChange={handleInputChange} />
                    <textarea placeholder='Text Area Value Here' className='p-2 border-2 w-full mx-2' type="text" value={textAreaValue} onChange={handleTextAreaChange}></textarea>
                    <button className='rounded-2xl px-16 py-2 mx-16 bg-blue-400' onClick={handleSendInput}>Send Input</button>
                </div>

                <InputReceive />

            </div>
            <iframe src={pdf00} width="80%" height="300px" />
            <a href={pdf00} target="_blank">Download Pdf</a>

        </>
    )
}

export default InputSend