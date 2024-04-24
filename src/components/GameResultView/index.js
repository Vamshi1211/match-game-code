import './index.css'

const GameResultView = props => {
  const {scoreValue, playAgainClicked} = props

  const onPlayAgainClicked = () => {
    playAgainClicked()
  }

  return (
    <div className="game-result-bg-container">
      <div className="game-card-bg-image">
        <img
          alt="trophy"
          className="trophy-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        />
        <p className="your-score-heading">Your Score</p>
        <p className="your-score">{scoreValue}</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onPlayAgainClicked}
        >
          <img
            alt="reset"
            className="play-again"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameResultView
