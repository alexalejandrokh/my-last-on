// import React from 'react';
// import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
// import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/toolbar/lib/styles/index.css';

// // Create an instance of the toolbar plugin
// const toolbarPluginInstance = toolbarPlugin();
// const { Toolbar } = toolbarPluginInstance;

// const PdfVviower = ({ pdfFile }) => {
//     return (
//         <div style={{ height: '750px' }}>
//             <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
//                 <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//                     <div style={{ padding: '0 1rem' }}>
//                         <Toolbar>
//                             {({ Download, ZoomIn, ZoomOut, Zoom, PageNumber, GoToNextPage, GoToPreviousPage }) => (
//                                 <div style={{ alignItems: 'center', display: 'flex' }}>
//                                     <Download />
//                                     <ZoomOut />
//                                     <Zoom />
//                                     <ZoomIn />
//                                     <GoToPreviousPage />
//                                     <PageNumber />
//                                     <GoToNextPage />
//                                 </div>
//                             )}
//                         </Toolbar>
//                     </div>
//                     <div style={{ flex: 1, overflow: 'hidden' }}>
//                         <Viewer
//                             fileUrl={pdfFile}
//                             plugins={[toolbarPluginInstance]}
//                             defaultScale={SpecialZoomLevel.PageWidth}
//                         />
//                     </div>
//                 </div>
//             </Worker>
//         </div>
//     );
// };

// export default PdfVviower;
