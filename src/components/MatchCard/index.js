// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {id, competing_team_logo, competing_team, result, match_status} =
    matchDetails

  const activeResult = match_status === 'Won' ? 'match-won' : 'match-loss'
  return (
    <div className="match-card-container">
      <div className="match-card-container2">
        <img src={competing_team_logo} alt={id} className="images-card" />
        <h1 className="opposite-team">{competing_team}</h1>
        <p className="opposite-result">{result}</p>
        <h2 className={`${activeResult}`}>{match_status}</h2>
      </div>
    </div>
  )
}

export default MatchCard
