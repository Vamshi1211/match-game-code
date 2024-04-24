import {Component} from 'react'
import './index.css'

class NavBarHeader extends Component {
  render() {
    const {scoreValue, timerValue} = this.props
    return (
      <ul className="navbar-container">
        <li className="nav-width-container">
          <img
            alt="website logo"
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          />
          <li className="score-timer-container">
            <p className="score-heading">
              Score: <span className="score-count">{scoreValue}</span>
            </p>
            <img
              className="timer-image"
              alt="timer"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            />
            <p className="timer">{timerValue} sec</p>
          </li>
        </li>
      </ul>
    )
  }
}

export default NavBarHeader
