import { Link } from "react-router-dom";
import "./style.css";

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
          <Link>
            <p className="foot-team">The team</p>
          </Link>

          <Link>
            <p className="foot-course">Buy a course</p>
          </Link>

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
            <span>
              <img src="assets/ti.png" />
            </span>
          </Link>

          <Link>
            <p className="foot-hire">Hire Developers</p>
          </Link>
        </section>
      </article>

      <section>
        <p className="foot-note">
          Copyright © 2020 The Motivv Community. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};
export default FooterNew;
