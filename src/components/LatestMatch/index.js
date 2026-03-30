import './index.css'

const LatestMatch = props => {
  const {teamDetails} = props
  const {
    umpires,
    result,
    man_of_the_match,
    id,
    date,
    venue,
    competing_team,
    competing_team_logo,
    first_innings,
    second_innings,
  } = teamDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-container2">
        <div className="first-second-part">
          <div className="first-part">
            <h1 className="team-name">{competing_team}</h1>
            <h2 className="date">{date}</h2>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <div className="second-part">
            <img src={competing_team_logo} alt={id} className="teams-logo" />
          </div>
        </div>
        <hr className="line" />
        <div className="third-part">
          <h1 className="first">First Innings</h1>
          <p className="para">{first_innings}</p>
          <h1 className="second">Second Innings</h1>
          <p className="para">{second_innings}</p>
          <h1 className="man">Man Of The Match</h1>
          <p className="para">{man_of_the_match}</p>
          <h1 className="main">Umpires</h1>
          <p className="para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
