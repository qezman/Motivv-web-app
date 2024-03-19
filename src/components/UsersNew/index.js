import "./style.css";
import UserDataTexts, {
  userData,
  userData1,
  userData2,
} from "../Users/userData";
import Fade from "react-reveal";

let man =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_old-man_szh9mp.png";
let woman =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_woman_urmbzx.png";
let boy =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_blond-haired-person_ricdfl.png";
let girl =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_girl_ufojdy.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594379270/Motivv/arrow_p0wwhj.png";

const UsersNew = () => {
  return (
    <section className="users-section">
      <article className="context-content">
        {/* content 1 */}
        <section>
          <div className="male-female-and-text">
            <div>
              <Fade bottom duration={1000} delay={1000}>
                <img src={man} />
                <img src={woman} />
              </Fade>
            </div>
            <p className="small-text pt-2">Motivv for Clients</p>
          </div>

          <article className="each-item">
            <h2 className="topic-text">
              How to use motivv <br /> as a client
            </h2>
            {userData1.map((item, index) => (
              <div className="arrow-and-text" key={index}>
                <img src={item.img.arrow} alt="Arrow" className="arrow-image" />
                <p className="text-item">{item.text}</p>
              </div>
            ))}
          </article>
        </section>

        {/* content 2 */}
        <section className="second-card">
          <div className="male-female-and-text">
            <div>
              <Fade bottom duration={1000} delay={1000}>
                <img src={boy} />
                <img src={girl} />
              </Fade>
            </div>
            <p className="small-text pt-2">Motivv for Creatives</p>
          </div>

          <article className="each-item">
            <h2 className="topic-text">
              How to use motivv <br /> as a designer
            </h2>
            {userData2.map((item, index) => (
              <div className="arrow-and-text" key={index}>
                <img src={item.img.arrow} alt="Arrow" className="arrow-image" />
                <p className="text-item">{item.text}</p>
              </div>
            ))}
          </article>
        </section>
      </article>
    </section>
  );
};
export default UsersNew;
