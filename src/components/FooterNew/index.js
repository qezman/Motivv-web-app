import { Link } from "react-router-dom";
import "./style.css";

let Twitter =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594473607/Motivv/feather_twitter_mbmao2.png";
let Instagram =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594473607/Motivv/ant-design_instagram-outlined_vo6c9g.png";
let TwitterLink = "https://twitter.com/motivvco?s=20";
let IGLink = "https://www.instagram.com/motivvco/";
let TheTeam = "https://aorthar.com/theteam";
let Courses = "https://aorthar.com/courses";
let Mailto = "mailto:hello@motivv.co";
const FooterNew = () => {
  return (
    <footer className="footer-img-container">
      <img className="footer-img" src="/assets/bg.png" alt="Background Image" />

      <article className="footer-link-contents">
        <section className="foot-content-one">
          <div className="container-motivv-logo">
            <Link to={"/"}>
              <img
                className="logo-img"
                src="/assets/motivv-logo.png"
                alt="Motivv Logo"
              />
            </Link>
          </div>
          <div className="love-aorthar-container">
            <p className="love-aorthar">Designed with 💚 by Aorthar</p>
          </div>
        </section>

        <section className="foot-col">
          <Link>
            <p className="foot-jobs">Jobs</p>
          </Link>

          <Link>
            <p className="foot-designers">Designers</p>
          </Link>

          <Link>
            <p className="foot-partner">Partner with us</p>
          </Link>
        </section>

        <section className="foot-col">
          <a href={TheTeam} target="_blank" rel="noopener noreferrer">
            <p className="foot-team">The team</p>
          </a>

          <a href={Courses} target="_blank" rel="noopener noreferrer">
            <p className="foot-course">Buy a course</p>
          </a>

          <Link>
            <p className="foot-contact">Contact Us</p>
          </Link>
        </section>

        <section className="foot-col">
          <Link>
            <p className="foot-terms">Terms and Condition</p>
          </Link>

          <Link>
            <span className="foot-connect">Connect with Us - </span>
            <a href={TwitterLink} target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="social icons" className="social-icon" />
            </a>
            <a href={IGLink} target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="social icons" className="social-icon" />
            </a>
          </Link>

          <a href={Mailto} target="_black">
            <p className="foot-hire">Hire Developers</p>
          </a>
        </section>
      </article>

      <section>
        <p className="foot-note">
          Copyright © {new Date().getFullYear()} The Motivv Community. All
          Rights Reserved.
        </p>
      </section>
    </footer>
  );
};
export default FooterNew;
