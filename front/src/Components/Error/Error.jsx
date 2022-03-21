import {Link} from 'react-router-dom';
import "./error.scss";

const Error = () => (
  <>
    <div>
      <div class="starsec"></div>
      <div class="starthird"></div>
      <div class="starfourth"></div>
      <div class="starfifth"></div>
    </div>



    <div class="lamp__wrap">
      <div class="lamp">
        <div class="cable"></div>
        <div class="cover"></div>
        <div class="in-cover">
          <div class="bulb"></div>
        </div>
        <div class="light"></div>
      </div>
    </div>

    <section class="error">

      <div class="error__content">
        <div class="error__message message">
          <h1 class="message__title">404</h1>
          <p class="message__text">Nous sommes désolés, la page que vous recherchez ne se trouve pas ici. Le lien que vous avez suivi peut être cassé ou n'existe plus.</p>
        </div>
        <div class="error__nav e-nav">
          <Link to='/'>Revenir sur la page d'accueil</Link>
        </div>
      </div>


    </section>
  </>


);

export default Error;
