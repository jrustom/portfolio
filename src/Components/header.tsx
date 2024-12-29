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
            <div className={'resumeButton'}>
                Resume
            </div>

        </div>
    )
}

export default Header;