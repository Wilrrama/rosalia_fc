import { StyledFooter } from "../styles/styledFooter";
import liga from "../assets/images/liga.png";
import ksports from "../assets/images/ksports_logo.png";
import logo_rony from "../assets/images/logo_rony.png";
import cowboy from "../assets/images/cowboy.png";
import logo_cesinha from "../assets/images/cesinha_logo.png";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://www.facebook.com/CesinhaBrasilOficial" target="_blank">
          <img src={logo_cesinha} alt="" />
        </a>

        <a
          href="https://www.facebook.com/Kinisi.sports.oficial"
          target="_blank"
        >
          <img src={ksports} alt="" />
        </a>

        <a href="https://www.facebook.com/ronaldo.r.adriano" target="_blank">
          <img src={logo_rony} alt="" className="logo__rony" />
        </a>

        <a
          href="https://www.youtube.com/watch?v=b6VeAqhFt-U&t=7496s"
          target="_blank"
        >
          <img src={cowboy} alt="" className="logo__cowboy" />
        </a>
      </div>

      <div>
        <a
          href="https://www.facebook.com/profile.php?id=61555954481148"
          target="_blank"
        >
          <img src={liga} alt="" />
        </a>
      </div>
    </StyledFooter>
  );
};
