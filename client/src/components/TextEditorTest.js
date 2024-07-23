import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Editor } from '@tinymce/tinymce-react';

const TextEditorTest = () => {
    const [value, setValue] = useState('');
    const toolbarOptions = [
        ['bold', 'italic', 'underline'],        // toggled buttons

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'font': [] }],
        [{ 'align': [] }],

    ];

    const module = {
        toolbar: toolbarOptions
    }

    return (
        <>
            <div className='w-10/12'>
                <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} />;
            </div>
            <textarea className='mx-2 px-2 w-full' placeholder='try'> </textarea>
        </>
    );
}

export default TextEditorTest