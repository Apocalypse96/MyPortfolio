import './NavBar.css';
function NavBar(){
    return(
        <div class="navbar">
            <div class="nav-info">
                <h1>Tejas Ghatule</h1>
            </div>
            <div class="nav-items">
                <a class="link" href="#home" id='smooth'>Home</a>
                <a class="link" href="#skills" id='smooth'>Skills</a>
                <a class="link" href="#project" id='smooth'>Projects</a>
                <a class="link" href="#contact" id='smooth'>Contact me</a>
            </div>
        </div>
    )
}
export default NavBar;