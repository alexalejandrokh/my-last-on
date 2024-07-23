import React, { useEffect, useRef, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'pdfjs-dist';

const PdfViewer = ({ pdfUrl }) => {
    const viewerRef = useRef(null);
    const [workerSrc, setWorkerSrc] = useState('');

    useEffect(() => {
        const initializePdfjs = async () => {
            // Load worker source dynamically
            const workerSrc = await import(
                `pdfjs-dist/build/pdf.worker.entry`
            );
            setWorkerSrc(workerSrc);
        };

        initializePdfjs();
    }, []);

    if (!workerSrc) {
        return null; // Render nothing if worker source is not loaded
    }

    return (
        <div className="w-full h-screen">
            <Worker workerUrl={workerSrc.default}>
                <div className="h-full">
                    <Viewer ref={viewerRef} fileUrl={pdfUrl} />
                </div>
            </Worker>
        </div>
    );
};

export default PdfViewer;