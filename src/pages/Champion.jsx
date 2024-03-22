import { StyledMain, BackgroundContainer } from "../styles/styledChampion";
import logo from "../assets/images/logo2.png";
import logo2 from "../assets/images/logo3.png";
import equipe from "../assets/images/equipe_rosalia.png";

export const Champion = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="champion_info">
          <div className="champion_info_team">
            <h1>CAMPEÃO</h1>
          </div>
          <div>
            <a
              href="https://copafacil.com/-jlte"
              target="_blank"
              className="championship_logos"
            >
              <img src={logo} alt="logo campeonato" className="logo" />
              <img src={logo2} alt="logo campeonato" className="logo2" />
            </a>
          </div>
        </div>
        <figure className="team_info">
          <img src={equipe} alt="equipe campeã" className="equipe" />
          {/* <figcaption>
            <h2>Técnico: Moisés Batista da Silva</h2>
            <p>
              Em pé: Maurício,Zulu,Paulinho,Samuca,Heron,Clebão,
              Uatson,Banana,Roger,Japa
            </p>
            <p>
              Agachados: Lamarques, Robson, Ruan,De
              Assis,Fernandinho,Formiga,Ronaldo,Chiquinho,Joadson,Mailson,Valdir,Biano
            </p>
          </figcaption> */}
        </figure>

        <div className="team_info_history">
          {/* <h1>História</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            eos facere itaque non ut numquam voluptatem! Vel distinctio, tempora
            tenetur omnis provident esse illum, neque temporibus blanditiis
            animi dignissimos nisi.
          </p> */}
          {/* <p>Sede da equipe: </p> */}
        </div>
      </StyledMain>
    </>
  );
};
