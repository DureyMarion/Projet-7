import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss"

import Error404 from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import FicheLogement from "./pages/FicheLogement";

import Footer from "./components/Footer";
import Header from "./components/Header";
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faChevronUp)

function App() {
return(
      <div>
        <Header />
          <main>

          <Routes>
					  <Route path="/" element={<Home />} />
            <Route path="/location/id" element={<FicheLogement />} />
					  <Route path="/a-propos" element={<About />} />
		
					  <Route path="*" element={<Error404 />} />
				  </Routes>

        </main>
      <Footer />
      </div>
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
