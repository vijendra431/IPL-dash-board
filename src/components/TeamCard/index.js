// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, team_image_url} = teamDetails
  return (
    <Link to={`/ipl/${id}`}>
      <li className="images-show">
        <div className="teams-container">
          <img src={team_image_url} className="team-images" alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
