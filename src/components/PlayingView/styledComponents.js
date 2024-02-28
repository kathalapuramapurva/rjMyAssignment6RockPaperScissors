import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;

  background-color: #223a5f;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    width: 70%;
    margin-bottom: 100px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;

  margin: 0px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  margin: 0px;
`

export const PlayingViewContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const PopUpContainer = styled.div`
  align-self: flex-end;
`

export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
`

export const CloseButton = styled.button`
  padding: 10px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  border: none;
  align-self: flex-end;
  margin-bottom: 10px;
`

export const RulesImage = styled.img`
  width: 90%;
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  width: 80vw;
`
export const GameResultView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export const YouOpponentBothContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const YouOpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const YouOpponentHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`

export const YouOpponentImage = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const ResultStatus = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  margin: 0px;
`

export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 25px 8px 25px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
`
