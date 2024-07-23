import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditorTiny() {
    const [editorContent, setEditorContent] = useState('');
    const editorRef = useRef(null);
    const [htmlContent, setHtmlContent] = useState('<p>This is some HTML content.</p>');

    const handleEditorChange = (content, editor) => {
        setEditorContent(content);
    };

    const handleGetContent = () => {
        console.log('Editor content:', editorContent);
        setHtmlContent(editorContent);
    };

    return (
        <>
            <Editor
                apiKey='odw9dsz27tqvl4g97c5m6qed0079ytkh5h3at8cjcsx6nwcp'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={handleEditorChange}
            />
            <button onClick={handleGetContent}>Log editor content</button>
            <div className='bg-blue-500 h-96 rounded-xl p-5 m-10' dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </>
    );
}