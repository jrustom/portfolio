import './resumePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import Resume from '../../public/resume.pdf';

function ResumePage() {

    const [showPopup, setShowPopup] = useState(false);
    const [popupTimeout, setPopupTimeout] = useState(0);

    function closePopup() {
        setPopupTimeout(setTimeout(() => setShowPopup(false), 6000));
    }

    function downloadPDF() {
        // const imageURL = '/public/resume.pdf';
        // const link = document.createElement('a');
        // link.href = imageURL;
        // link.download = 'jason-rustom-resume.pdf';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    }

    return (
        <div className={'resumePage'}>
            <div className={'resumePageDownloadButton'} onClick={downloadPDF}>
                <FontAwesomeIcon icon={faArrowDown} className={'resumePageDownloadIcon'}/>
            </div>

            <div className={'resumePageContent'} onClick={() => {
                if (!showPopup) {
                    setShowPopup(true);
                    closePopup();
                }
                else {
                    setShowPopup(false);
                    clearTimeout(popupTimeout);
                }
            }}>
                <img src={Resume} alt="Resume" className={'resumePageImg'}/>

                <div className={ showPopup ? 'resumePagePopup' : 'resumePagePopupHidden'}>
                    Sorry, links aren't clickable from here. Please download the pdf to access them, or use the icons in the footer.
                </div>
            </div>
        </div>
    )
}

export default ResumePage;