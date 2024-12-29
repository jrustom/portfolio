import Resume from '../assets/resume.pdf';
import './resumePage.css';

function ResumePage() {
    return (
        <div className={'resumePage'}>
            <img src={Resume} alt="Resume" />
        </div>
    )
}

export default ResumePage;