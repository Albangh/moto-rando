import { Routes, Route } from "react-router-dom";

// route
import Home from "../../Pages/Home/Home";
import Registration from "../../Pages/Registration/Registration";
import Team from "../../Pages/Team/Team";
import Itinerary from "../../Pages/FilterItinerary/Itinerary";
import OneItinerary from "../../Pages/OneItinerary/Itinerary";
import Profil from "../../containers/Profil";
import LoginContainer from "../../containers/Login";
import HeaderContainer from "../../containers/Header";
import RegistrationItinerary from "../../containers/RegistrationItinerary";
import UpdateProfil from "../../containers/UpdateProfil";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import LegalNotice from "../Footer/LegalNotice/LegalNotice";

// styles
import "../../styles/index.scss";
import "./app.scss";
import ScrollToTop from "../scrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <ScrollToTop>
        <Routes>
          {/* route public */}
          <Route path="/" element={<Home />} />
          <Route path="/itineraires" element={<Itinerary />} />
          <Route path="/itineraire/:id" element={<OneItinerary />} />
          <Route path="/connexion" element={<LoginContainer />} />
          <Route path="/inscription" element={<Registration />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="*" element={<Error />} />
          {/* route privee */}
          <Route
            path="/profil/:id/nouveau-itineraire"
            element={<RegistrationItinerary />}
          />
          <Route path="/profil/:id" element={<Profil />} />
          <Route path="/profil/:id/modifier" element={<UpdateProfil />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
