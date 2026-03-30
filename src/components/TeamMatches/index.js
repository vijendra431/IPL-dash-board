import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamImageUrl: '',
    latestMatchResult: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedLatestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      man_of_the_match: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competing_team: data.latest_match_details.competing_team,
      competing_team_logo: data.latest_match_details.competing_team_logo,
      first_innings: data.latest_match_details.first_innings,
      second_innings: data.latest_match_details.second_innings,
    }

    const updatedMatchCardList = data.recent_matches.map(eachMatch => ({
      id: eachMatch.id,
      competing_team_logo: eachMatch.competing_team_logo,
      competing_team: eachMatch.competing_team,
      result: eachMatch.result,
      match_status: eachMatch.match_status,
    }))

    this.setState({
      teamImageUrl: data.team_banner_url,
      latestMatchResult: updatedLatestMatch,
      recentMatches: updatedMatchCardList,
      isLoading: false,
    })
  }

  getClassData = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'MI':
        return 'mi'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'KXP':
        return 'kp'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }
  render() {
    const {teamImageUrl, latestMatchResult, recentMatches, isLoading} =
      this.state
    return (
      <div className={`team-matches-container ${this.getClassData()}`}>
        {isLoading ? (
          <div className="do-loader" testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="team-matches-container2">
            <img
              src={teamImageUrl}
              alt="team banner"
              className="teams-images"
            />
            <div className="head">
              <h1 className="matches-heading">Latest Matches</h1>
            </div>
            <LatestMatch teamDetails={latestMatchResult} />
            <ul className="card-teams-list">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
              ))}
            </ul>
            <Link to="/">
                <button className='home-button'>Move Home Page</button>
            </Link>
            
            
          </div>
        )}
       
      </div>
    )
  }
}

export default TeamMatches
