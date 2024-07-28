
import { Container, Row } from "react-bootstrap";
import resume from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState, useEffect } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function Resume(){ 
    const [scale, setScale] = useState(0.04 * Math.sqrt(window.innerWidth) - 0.1);   
     
    useEffect(() => { 
        window.addEventListener("resize", () => setScale(0.04 * Math.sqrt(window.innerWidth) - 0.1));  
        return () => 
            window.removeEventListener("resize", () => setScale(0.04 * Math.sqrt(window.innerWidth) - 0.1));
    }, []);

    return(
        <div>
            <Container fluid className="resume-section">
                <Row className="resume">
                    <Document 
                        file={resume}
                        className="d-flex justify-content-center"
                        onLoadError={(error) =>
                            alert(`ERROR: Document failed to load ${error.message}`)
                        }
                    >
                        <Page pageNumber={1} scale={scale} />
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;