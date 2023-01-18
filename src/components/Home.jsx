import React from "react";
import vg from "../assets/2.webp";
import "../style/Home.scss";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="Home" id="Home">
        <main>
          <div>
            <h1>Abhi tech</h1>
            <p>Deliver all tech solutions...</p>
          </div>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Abhi-Tech Icon" />
        <div>
          <p>
            We're Abhi Tech, a leading branding agency with a passion for
            creating memorable names and internationally-renowned brands. Since
            our launch, we’ve worked on more than 1,000 projects for clients
            around the world. We’re big enough to handle massive projects, and
            yet also nimble enough to come up with names on demand that hit
            every time.
          </p>
        </div>
      </div>
      <div className="home3" id="About">
        <div>
          <h1>About Us</h1>
          <p>
            Hi Buddy ! We're Abhi Tech, a leading branding agency with a passion
            for creating memorable names and internationally-renowned brands.
            Since our launch, we’ve worked on more than 1,000 projects for
            clients around the world. We’re big enough to handle massive
            projects, and yet also nimble enough to come up with names on demand
            that hit every time.Give a chance to prove ourself.
          </p>
        </div>
      </div>
      <div className="home4" id="Brands">
        <div>
          <h1>brands</h1>
          <article>
            <div
              style={{
                animationDelay: ".3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>google</p>
            </div>
            <div
              style={{
                animationDelay: ".5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>amazon</p>
            </div>
            <div
              style={{
                animationDelay: ".7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
