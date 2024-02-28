import {ListItem, ChoiceButton, ImageElement} from './styledComponents'

const ChoiceItem = props => {
  const {choice, onChooseItem} = props
  const {imageUrl, id} = choice
  let dataTestId
  switch (id) {
    case 'SCISSORS':
      dataTestId = 'scissorsButton'
      break
    case 'ROCK':
      dataTestId = 'rockButton'
      break
    case 'PAPER':
      dataTestId = 'paperButton'
      break
    default:
      dataTestId = 'null'
  }
  const onClickItem = () => {
    onChooseItem(id)
  }
  return (
    <ListItem>
      <ChoiceButton
        type="button"
        onClick={onClickItem}
        data-testid={dataTestId}
      >
        <ImageElement src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}

export default ChoiceItem
