export default function Header(props)
{
    return (
        <nav className={props.darkMode?"dark":""}>
            <p className="toggler--light">Dark</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
            <p className="toggler--dark">Light</p>
        </nav>
    );
}