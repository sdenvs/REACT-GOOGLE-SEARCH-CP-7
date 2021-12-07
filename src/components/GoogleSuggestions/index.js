// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {seach: ''}

  changeSearch = event => {
    this.setState({seach: event.target.value})
  }

  changeValue = value => {
    this.setState({seach: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {seach} = this.state
    const showList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(seach.toLowerCase()),
    )
    return (
      <div className="bgContainer">
        <img
          className="logo"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="inputEl-container">
          <img
            className="searchIcon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          />
          <input
            onChange={this.changeSearch}
            placeholder="Search Google"
            className="imputEl"
            type="search"
            value={seach}
          />
        </div>
        <ul className="list-container">
          {showList.map(eachItem => (
            <SuggestionItem
              changeValue={this.changeValue}
              key={eachItem.id}
              details={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
