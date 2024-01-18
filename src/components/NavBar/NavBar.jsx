import './NavBar.css';

const NavBar = () => {

    return (
        <nav>
            <ul className='spEven'>
                <li className='center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="morph"
                    ></lord-icon>
                </li>
                <li className='center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jkzgajyr.json"
                        trigger="morph"
                        state="morph-folder"
                    ></lord-icon>
                </li>
                <li className='center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/ijahpotn.json"
                        trigger="morph"
                    ></lord-icon>
                </li>
                <li className='center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/zyzoecaw.json"
                        trigger="morph"
                        state="morph-book"
                    ></lord-icon>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;