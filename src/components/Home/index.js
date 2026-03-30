import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      team_image_url: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoading: false})
  }
  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="home-container2">
          <div className="heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-image"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          <ul className="teams-list">
            {isLoading ? (
              <div className="show-loader" testid="loader">
                {' '}
                <Loader
                  type="Oval"
                  color="#ffffff"
                  height={50}
                  width={50}
                />{' '}
              </div>
            ) : (
              teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.key} teamDetails={eachTeam} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
