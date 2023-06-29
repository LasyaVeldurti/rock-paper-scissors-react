import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import GameOptions from '../GameOptions'

import {
  GameContainer,
  OptionsContainer,
  Option,
  Container,
  HeadingContainer,
  ScoreContainer,
  ListOptionContainer,
  TextContent,
  RulesButton,
  ResultContainer,
  GameStatusContainer,
  PopupContainer,
  PlayButton,
  GameImage,
  PopupImage,
  ScorePhrase,
  ScoreNumber,
  CloseButton,
  PopupBody,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WON',
  lost: 'LOSE',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    isGameInProgress: true,
    playerChoice: '',
    gameChoice: '',
    gameStatus: gameStatusConstants.inProgress,
    score: 0,
  }

  displayGameResult = id => {
    const {choicesList} = this.props

    const randomIndex = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[randomIndex].id
    this.setState(
      {isGameInProgress: false, playerChoice: id, gameChoice: opponentChoice},
      this.evaluateGame(id, opponentChoice),
    )
  }

  evaluateGame = (userChoice, opponentChoice) => {
    if (userChoice === opponentChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  playGame = () => {
    this.setState({
      isGameInProgress: true,
      gameStatus: gameStatusConstants.inProgress,
    })
  }

  renderDisplayGameView = () => {
    const {choicesList} = this.props
    return (
      <>
        <ListOptionContainer>
          {choicesList.map(eachChoice => (
            <GameOptions
              key={eachChoice.id}
              choiceDetails={eachChoice}
              displayGameResult={this.displayGameResult}
            />
          ))}
        </ListOptionContainer>
      </>
    )
  }

  renderGameResultView = () => {
    const {choicesList} = this.props
    const {playerChoice, gameChoice, gameStatus} = this.state
    let resultText = ''
    if (gameStatus === 'DRAW') {
      resultText = `IT IS ${gameStatus}`
    } else {
      resultText = `YOU ${gameStatus}`
    }

    const playerChoiceValue = choicesList.filter(
      choice => choice.id === playerChoice,
    )
    const playerUrl = playerChoiceValue[0].imageUrl
    const gameChoiceValue = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameUrl = gameChoiceValue[0].imageUrl

    return (
      <>
        <ResultContainer>
          <Container>
            <TextContent>You</TextContent>
            <GameImage src={playerUrl} alt="your choice" />
          </Container>
          <Container>
            <TextContent>Opponent</TextContent>
            <GameImage src={gameUrl} alt="opponent choice" />
          </Container>
        </ResultContainer>
        <GameStatusContainer>
          <TextContent>{resultText} </TextContent>
          <PlayButton onClick={this.playGame} type="button">
            Play Again
          </PlayButton>
        </GameStatusContainer>
      </>
    )
  }

  render() {
    const {isGameInProgress, score} = this.state

    return (
      <GameContainer>
        <HeadingContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionsContainer>

          <ScoreContainer>
            <ScorePhrase>Score</ScorePhrase>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </HeadingContainer>
        {isGameInProgress
          ? this.renderDisplayGameView()
          : this.renderGameResultView()}

        <PopupContainer>
          <Popup
            modal
            trigger={
              <RulesButton className="rules-btn" type="button">
                Rules
              </RulesButton>
            }
          >
            {close => (
              <>
                <PopupBody>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                  <PopupImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupBody>
              </>
            )}
          </Popup>
        </PopupContainer>
      </GameContainer>
    )
  }
}

export default RockPaperScissors
