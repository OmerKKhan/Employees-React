
import femaleProfile from "./images/femaleProfile.jpeg"
import maleProfile from "./images/maleProfile.jpeg"
import Teams from './Teams';
import TeamMembers from './TeamMembers';
import TeamMemberCard from './TeamMemberCard';
const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {

  
  return (
    <main className="container">
        <div className= "row justify-content-center mt-3 mb-4">
          <div className= "col-8">
            <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
          </div>
        </div>
      <div className= "row justify-content-center mt-3 mb-4">
        <div className= "col-8">
          <div className= "card-collection">
          <TeamMembers 
            employees={employees} 
            handleEmployeeCardClick={handleEmployeeCardClick} 
            selectedTeam={selectedTeam}/>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Employees