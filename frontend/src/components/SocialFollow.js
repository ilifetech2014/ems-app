import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlus,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a className="social">Share</a> 
      <a
        href="https://www.youtube.com"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faGooglePlus} size="1x" />
      </a>
      <a
        href="https://www.facebook.com"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a
        href="https://www.instagram.com"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
}
