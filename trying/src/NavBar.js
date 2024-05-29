import './NavBar.css';
function NavBar(){
    return(
        <div class="navbar">
            <div class="nav-info">
                <h1>Aayush Khopade</h1>
            </div>
            <div class="nav-items">
                <a class="link" href="#home">Home</a>
                <a class="link" href="#skills">Skills</a>
                <a class="link" href="#Project">Projects</a>
                <a class="link" href="#contact">Contact me</a>
            </div>
        </div>
    )
}
export default NavBar;