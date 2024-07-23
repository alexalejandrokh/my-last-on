import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import MyDocument from "./MyDocument"
import InputReceive from "./InputReceive";

const ShowIt = () => {
    return (
        <div className="h-screen">
            <PDFViewer width='100%' height='100%'>
                <MyDocument />
                {/* <InputReceive /> */}
            </PDFViewer>
            <PDFDownloadLink>
                <MyDocument />
            </PDFDownloadLink>
        </div>
    )
}

export default ShowIt;