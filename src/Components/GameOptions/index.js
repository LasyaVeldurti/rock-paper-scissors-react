import {GameOptionButton, GameImage, ListItemOption} from './styledComponents'

const GameOptions = props => {
  const {choiceDetails, displayGameResult} = props
  const {imageUrl, id} = choiceDetails
  const displayScoreCard = () => {
    displayGameResult(id)
  }
  return (
    <ListItemOption>
      <GameOptionButton
        onClick={displayScoreCard}
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
      >
        <GameImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </ListItemOption>
  )
}

export default GameOptions
