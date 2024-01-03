import logoBlanc from './../../assets/LOGO-white.svg'

function Footer() {
  return (
    <div className="footer">
      <img src={logoBlanc} alt="Logo de Kasa en blanc" />
      <p>
        © 2020 Kasa. All <br className="line-break" />
        rights reserved
      </p>
    </div>
  )
}

export default Footer
