import styled from 'styled-components'
import Matilda from '../assets/images/hemsida-yogasyster-matilda.jpg'
// import FontBellota from './Font-Bellota-Regular.ttf'

export const StyleHomeFirstSlide = styled.section`

  .slide-one-container {
    background-image: url(${Matilda});
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 

  .container {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    margin-right: 20%;
    color: #84142d;
  }

  h1 {
    font-size: 8vw;
    font-family: 'Bellota', 'Helvetica', 'Arial', 'sans-serif';
    margin-top: 10%;
    margin-right: 3%;
    margin-left: 3%;
    margin-bottom:20%;
  }

  h2 {
    font-size: 2vw;
    margin: 0% 0% 1% 0%;
    font-weight: 500;
    text-align: center;
  }
}


  ${'' /* slide 1 xl screen */}
  @media only screen and (min-width: 1700px) {
    .slide-one-container {
    background-position: 1%;    
    }
    
    h1 {
    font-size: 15vh;
    margin: 0% 0% 5% 0%;
    }

  }

  ${'' /* slide 1 tablet */}
  @media only screen and (max-width: 1000px) {
    .slide-one-container {
      background-position: 40%;
    }

    .container {
      margin: 5% 0% 0% 0%;
      width: 95%;
      text-align: center;
    }

    h1 {
      font-size: 10vh;
      margin: 3% 0% 2% 0%;;
    }

    h2 {
      font-size: 3vh;
      margin: 0% 0% 1% 0%;
    }
  }
 

  ${'' /* slide 1 mobile */}
  @media only screen and (max-width: 426px) {
    .container {
      margin: 15% 0% 0% 0%;
    }

    h1 {
      font-size: 18vw;
      margin: 0% 0% 5% 0%;
    }

    h2 {
      font-size: 7vw;
      margin: 0% 0% 3% 0%;
    }
  }

 @media only screen and (orientation: landscape) and (max-width: 450px) {
    .container {
      margin: 15% 10% 0% 0%;
    }

    h1 {
      margin: 8% 0% 5% 0%;
      font-size: 12vw;
    }

    h2 {
      font-size: 3vw;
      margin: 0% 0% 1% 0%;
    }
  }

 @media only screen and (max-device-width: 2024px) and (orientation: landscape) {
    .container {
      margin-top: 4%;
      margin-left: 42%;
    }

    h1 {
      font-size: 10vw;
      margin-bottom: 1%;
    }

    h2 {
      font-size: 2.5vw;
      margin: 0% 0% 1% 0%;
    }
  } 
`
