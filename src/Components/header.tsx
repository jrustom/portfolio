import { Link, useLocation } from 'react-router-dom';
import './header.css';

function Header() {

    const location = useLocation();

    if (location.pathname == "/resume")
        return null;

    return (
        <div className={'headerContainer'}>

            <div className={'homeButton'}>
                Home
            </div>
            <div className={'aboutButton'}>
                About
            </div>
            <div className={'skillsButton'}>
                Skills
            </div>
            <Link to={'/resume'} target={'_blank'} className={'resumeButton'}>
                Resume
            </Link>

        </div>
    )
}

export default Header;