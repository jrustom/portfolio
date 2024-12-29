import { NavLink } from '../../../../Tennis Website/interclub/node_modules/react-router-dom';
import './header.css';

function Header() {
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
            <NavLink to={'/resume'} className={'resumeButton'}>
                Resume
            </NavLink>

        </div>
    )
}

export default Header;