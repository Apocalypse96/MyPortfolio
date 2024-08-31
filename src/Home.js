import './Home.css';
import NavBar from './NavBar';
function Home(){
    return(
        <div>
            <NavBar />
            <div class="home" id='home'>
                <div class="home-info">
                    <div class="home-zoom">
                        <div class="home-img">
                            <img src='https://res.cloudinary.com/dhgfsshq4/image/upload/v1705444035/hacks%206.0/hover_craft_kgbfdt.webp'></img>
                        </div>
                        <div class="home-rock">
                            <img class="rocket" src='https://res.cloudinary.com/dhgfsshq4/image/upload/v1705440728/hacks%206.0/Group_5254_right_yqs3kf.png'></img>
                        </div>
                    </div>

                    <p>
                    As a second-year tech enthusiast, I'm passionate about bringing ideas to life through full-stack development. 
                    With a growing portfolio of diverse projects, I'm committed to turning theory into practice.
                    Eager to explore new challenges, I thrive on innovation and am excited to contribute to cutting-edge solutions that make an impact.
                    </p>
                    <div class="home-opprock">
                        <img src='https://res.cloudinary.com/dhgfsshq4/image/upload/v1705439619/hacks%206.0/Group_5254_d7rqob.webp'></img>
                    </div>
                </div>
  
            </div>
        </div>
    )
}
export default Home;