import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './../../pages/Home'
import Error from './../../pages/Error'
import Header from './../Header'
import APropos from './../../pages/APropos'
import Footer from './../Footer'
import FicheLogement from '../../pages/FicheLogement'

function Routeur() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />}></Route>
        <Route
          path="/FicheLogement/:idLogement"
          element={<FicheLogement />}
        ></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routeur
