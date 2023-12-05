import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 500;
    min-height: 100vh;
    width:100%;
}
#root{
    display:flex;
    flex-direction:column;
    min-height: 100vh
}
`
export default GlobalStyle
