import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ChoiceItem from '../ChoiceItem/index'

import {
  AppContainer,
  ContentContainer,
  HeaderContainer,
  Heading,
  ScoreContainer,
  ScoreHeading,
  Score,
  PlayingViewContainer,
  PopUpContainer,
  TriggerButton,
  CloseButton,
  RulesImage,
  RulesContainer,
  GameResultView,
  YouOpponentBothContainer,
  YouOpponentContainer,
  YouOpponentHeading,
  YouOpponentImage,
  ResultStatus,
  PlayAgainButton,
} from './styledComponents'

class RockPaperScissorGame extends Component {
  state = {
    playingView: true,
    myChoice: '',
    opponentChoice: '',
    resultStatus: '',
    score: 0,
  }

  onChooseItem = givenId => {
    const {choicesList} = this.props

    const randomNumber = Math.floor(Math.random() * 3)
    const randomImageObject = choicesList[randomNumber]
    let status
    if (
      (givenId === 'PAPER' && randomImageObject.id === 'ROCK') ||
      (givenId === 'SCISSORS' && randomImageObject.id === 'PAPER') ||
      (givenId === 'ROCK' && randomImageObject.id === 'SCISSORS')
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      status = 'YOU WON'
    } else if (
      (givenId === 'PAPER' && randomImageObject.id === 'SCISSORS') ||
      (givenId === 'SCISSORS' && randomImageObject.id === 'ROCK') ||
      (givenId === 'ROCK' && randomImageObject.id === 'PAPER')
    ) {
      this.setState(prevState => ({score: prevState.score - 1}))
      status = 'YOU LOSE'
    } else {
      status = 'IT IS DRAW'
    }
    this.setState({
      myChoice: givenId,
      playingView: false,
      opponentChoice: randomImageObject.id,
      resultStatus: status,
    })
  }

  onClickPlayAgain = () => {
    this.setState({playingView: true})
  }

  render() {
    const {choicesList} = this.props
    const {
      playingView,
      myChoice,
      score,
      opponentChoice,
      resultStatus,
    } = this.state

    const myImageObject = choicesList.find(
      eachChoice => eachChoice.id === myChoice,
    )
    const randomImageObject = choicesList.find(
      eachChoice => eachChoice.id === opponentChoice,
    )

    return (
      <AppContainer>
        <ContentContainer>
          <HeaderContainer>
            <Heading>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Heading>

            <ScoreContainer>
              <ScoreHeading>Score</ScoreHeading>
              <Score>{score}</Score>
            </ScoreContainer>
          </HeaderContainer>

          {playingView ? (
            <PlayingViewContainer>
              {choicesList.map(eachChoice => (
                <ChoiceItem
                  key={eachChoice.id}
                  choice={eachChoice}
                  onChooseItem={this.onChooseItem}
                />
              ))}
            </PlayingViewContainer>
          ) : (
            <GameResultView>
              <YouOpponentBothContainer>
                <YouOpponentContainer>
                  <YouOpponentHeading>YOU</YouOpponentHeading>
                  <YouOpponentImage
                    src={myImageObject.imageUrl}
                    alt="your choice"
                  />
                </YouOpponentContainer>
                <YouOpponentContainer>
                  <YouOpponentHeading>OPPONENT</YouOpponentHeading>
                  <YouOpponentImage
                    src={randomImageObject.imageUrl}
                    alt="opponent choice"
                  />
                </YouOpponentContainer>
              </YouOpponentBothContainer>
              <ResultStatus>{resultStatus}</ResultStatus>
              <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
                PLAY AGAIN
              </PlayAgainButton>
            </GameResultView>
          )}

          <PopUpContainer>
            <Popup
              modal
              trigger={<TriggerButton type="button">RULES</TriggerButton>}
            >
              {close => (
                <RulesContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesContainer>
              )}
            </Popup>
          </PopUpContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissorGame
