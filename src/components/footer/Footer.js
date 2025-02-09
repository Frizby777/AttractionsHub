import "./style.css";
import "./../../styles/main.css";
import vk from "./../../img/icons/vk.svg";
import ok from "./../../img/icons/ok.svg";
import tg from "./../../img/icons/tg.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={ok} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={tg} alt="Link" /></a></li>
          </ul>
          <div className="copyright">
            <p>© 2025 attraction-hub-3D.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;