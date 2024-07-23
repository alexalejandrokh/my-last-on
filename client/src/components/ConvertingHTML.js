import React, { useState } from 'react';

const YourComponent = () => {
    const [htmlContent, setHtmlContent] = useState('<p>This is some HTML content.</p>');

    const handleGetContent = () => {
        // Access the content from state
        console.log('HTML content:', htmlContent);
    };

    return (
        <div>
            <textarea className='w-full'
                value={htmlContent}
                onChange={(e) => setHtmlContent(e.target.value)}
            />
            <button className='w-full rounded-md bg-red-400 ' onClick={handleGetContent}>Get Content</button>
            {/* Display the HTML content as text */}
            <div className='bg-blue-500 h-96 rounded-xl p-5 m-10' dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default YourComponent;
