import "./styles.css";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";

const Footer = () => (
  <footer className="main-footer">
    App desenvolvido durante a 2º edição do evento semana DevSuperior.
    <div className="footer-icons">
      <a href="https://www.youtube.com/c/DevSuperior" target="_new">
        <YoutubeIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/fellipe-araujo-1a97b31a4/"
        target="_new"
      >
        <LinkedinIcon />
      </a>
      <a href="https://www.instagram.com" target="_new">
        <InstagramIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
