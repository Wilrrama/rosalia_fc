import {
  StyledAchievements,
  BackgroundContainer,
} from "../styles/styledAchievements";

import trofeu from "../assets/images/trofeu.png";
import copa_nego_dao from "../assets/images/copa_nego_dao.png";
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
                <td>2024</td>
                <td>
                  <figure>
                    <img
                      src={logo2}
                      alt="Logo Copa Euro"
                      className="logo__campeonato"
                    />
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
                <td>2023</td>
                <td>
                  <figure>
                    <img
                      src={copa_nego_dao}
                      alt="Logo Copa Nego Dão"
                      className="logo__campeonato"
                    />
                    <figcaption>
                      <p>Copa Nego Dão</p>
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
            </tbody>
          </table>
        </section>
      </StyledAchievements>
    </>
  );
};
