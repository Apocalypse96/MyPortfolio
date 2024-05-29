import './NavBar.css';
function NavBar(){
    return(
        <div class="navbar">
            <div class="nav-info">
                <h1>Aayush Khopade</h1>
            </div>
            <div class="nav-items">
                <a class="link" href="Home.js">Home</a>
                <a class="link" href="Skills.js">Skills</a>
                <a class="link" href="Projects.js">Projects</a>
                <a class="link" href="Contact.js">Contact me</a>
            </div>
        </div>
    )
}
export default NavBar;