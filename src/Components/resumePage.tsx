import './resumePage.css';

import Resume from '../assets/resume.pdf';

function ResumePage() {
    return (
        <div className={'resumePage'}>
            {/*Put download icon here*/}

            {/*Look into how the links in the pdf could be clickable even from the webpage*/}
            <div className={'resumePageDownloadButton'}/>


            <img src={Resume} alt="Resume" className={'resumePageImg'}/>
        </div>
    )
}

export default ResumePage;