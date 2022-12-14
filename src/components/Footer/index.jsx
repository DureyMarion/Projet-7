import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import logoWhite from "../../assets/logo-footer.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoWhite} alt="Kasa" />
        </Link>

        <p>&copy; 2021 Kasa. Tous droits réservés</p>
      </footer>
    );
  }
}

export default Footer;