import {
  StyledAchievements,
  BackgroundContainer,
} from "../styles/styledAchievements";

import trofeu from "../assets/images/trofeu.png";
import copa_nego_dao from "../assets/images/copa_nego_dao.png";
import trofeu_2023 from "../assets/images/trofeu_2023.jpeg";
import logo2 from "../assets/images/logo copa euro.png";

export const Achievements = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledAchievements>
        <header>
          <h1>Galeria de Troféus</h1>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Campeonato</th>
                <th>Troféu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>2024</p>
                </td>
                <td>
                  <figure>
                    <a href="https://copafacil.com/-jlte" target="_blank">
                      <img
                        src={logo2}
                        alt="Logo Copa Euro"
                        className="logo__campeonato"
                        title="Página oficial da Copa Euro"
                      />
                    </a>
                    <figcaption>
                      <p>Copa Euro</p>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  <img
                    src={trofeu}
                    alt="Foto Troféu"
                    className="logo__trofeu"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p>2023</p>
                </td>
                <td>
                  <figure>
                    <a
                      href="https://copafacil.com/-njggaylv0_wkdqlgnxj"
                      target="_blank"
                      title="Página oficial da Copa Nego Dão"
                    >
                      <img
                        src={copa_nego_dao}
                        alt="Logo Copa Nego Dão"
                        className="logo__campeonato"
                      />
                    </a>
                    <figcaption>
                      <p>Copa Nego Dão</p>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  <img
                    src={trofeu_2023}
                    alt="Foto Troféu"
                    className="logo__trofeu"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </StyledAchievements>
    </>
  );
};
