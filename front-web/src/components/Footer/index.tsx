import React from 'react';
import './styles.css';
import { ReactComponent as YouTubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';

const Footer = () => {
  return (
		<footer className="main-footer">
			App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
			<div className="footer-icons">
				<a href="" target="_new">
					<YouTubeIcon />
				</a>
				<a href="" target="_new">
					<LinkedInIcon />
				</a>
				<a href="" target="_new">
					<InstagramIcon />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
