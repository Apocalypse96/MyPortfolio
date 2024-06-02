import './Projects.css';
function Project() {
  return (
    <div class = "project" id='project'>
        <div class="proj-bar">
          <h1>Projects</h1>
          <img class="cartoon" src='https://res.cloudinary.com/dhry5xscm/image/upload/v1705177410/nits-hacks-6.0/barnil_gh48ld.gif'></img>
        </div>
        <div class="proj-main">
          <div class="card">
            <div class="front" id='frone'>
              <img class="fr-img" src='https://portfolio-devanshsahni.vercel.app/static/media/TindogImage.4e5a87d8a7a948be72d7.png'></img>
              <h2>TinDog</h2>
            </div>
            <div class="back">
              <img class="rockhall" src='https://res.cloudinary.com/dhgfsshq4/image/upload/v1705440728/hacks%206.0/Group_5254_right_yqs3kf.png'></img>
              <p>This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.</p>
            </div>
          </div>
          <div class="card">
            <div class="front" id='frsec'>
              <img class="fr-img" src='https://portfolio-devanshsahni.vercel.app/static/media/WigglesImage.20a26843b040ce7513a0.png'></img>
              <h2>Wiggles</h2>
            </div>
            <div class="back">
              <img src='https://res.cloudinary.com/dhry5xscm/image/upload/v1706107103/pikachu_dhcqjy.gif'></img>
              <p>An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.</p>
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img class="fr-img" src='https://portfolio-devanshsahni.vercel.app/static/media/RogfreeImage.993cda77ba697f732f83.png'></img>
              <h2>Rog-Free</h2>
            </div>
            <div class="back">
              <img  class="rockhall" src='https://res.cloudinary.com/dhgfsshq4/image/upload/v1705439619/hacks%206.0/Group_5254_d7rqob.webp'></img>
              <p>A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.</p>
            </div>
          </div>

        </div>
    </div>
  );
}
export default Project;