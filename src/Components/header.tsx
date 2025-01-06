import './header.css';

import { Link, useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();

    return (location.pathname == "/resume") ? null :
        (
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