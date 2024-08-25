import axios from 'axios';
import React, { useState } from 'react'

const UploadFile2 = () => {
    const [title, setTitle] = useState();
    const [file, setFile] = useState();

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title)
        formData.append('file', file);
        console.log(title, file);
        const result = await axios.post('https://saudichamberes.org/upload-files', formData, {
            headers: { "Content-Type": "Multipart/form-data" },
        });
        console.log(result);
    }
    return (
        <div>
            <form className='' onSubmit={submitImage}>
                <h1>Upload Pdf Files</h1>
                <input
                    type='text'
                    placeholder='Title'
                    required
                    onChange={(e) => setTitle(e.target.value)} />
                <input
                    type='file'
                    accept='application/pdf'
                    required
                    onChange={(e) => setFile(e.target.files[0])} />

                <button className='bg-blue-500 rounded-xl py-1 px-2 text-white' type='submit'>Upload</button>
            </form>
        </div>
    )
}

export default UploadFile2