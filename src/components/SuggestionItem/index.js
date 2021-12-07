// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, changeValue} = props
  const {suggestion} = details

  const changeValueFun = () => {
    changeValue(suggestion)
  }

  return (
    <li className="suggetion-item">
      <p>{suggestion}</p>
      <img
        onClick={changeValueFun}
        value={suggestion}
        className="arrowIcon"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
