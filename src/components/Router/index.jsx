import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './../../pages/Home'
import Error from './../../pages/Error'
import Header from './../Header'
import APropos from './../../pages/APropos'
import Footer from './../Footer'
import FicheLogement from '../../pages/FicheLogement'
import GlobalStyle from '../../GlobalStyle'

function Routeur() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />}></Route>
        <Route path="/FicheLogement" element={<FicheLogement />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routeur
