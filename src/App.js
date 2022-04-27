import { useState } from 'react';
import './App.css';

function TeamMember(props) {

  const { member } = props;
  
  return (
    <div className="team-member">
      <h4>{ member.name }</h4>
      <p>I am a { member.role } with { ' ' }
         { member.yearsExperience } { ' ' } 
         { member.yearsExperience===1?'year':'years' } of
         industry experience.
      </p>
      <p>Contact me: { member.email }</p>
    </div>
     )
}

function App() {

  const [team, setTeam] = useState([
    { name:  'Leigh Garrett',  
      email: 'leighagarrett@gmail.com',
      role:  'frontend developer',
      yearsExperience: 10,
    },
    { name:  'Barry Granger',
      email: 'grangerbarry@gmail.com',
      role:  'backend developer',
      yearsExperience: 1,
    },
    {
      name:  'Calista Christian',
      email: 'cchristian@gmail.com',
      role:  'data engineer',
      yearsExperience: 3,
    }
  ]);


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {team.map(member => {
            return (
              <TeamMember member={member} />
                )})}
        </ul>
      </header>
    </div>
  );
}

export default App;
