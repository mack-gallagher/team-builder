import { useState } from 'react';
import './App.css';
import Form from './Form.js';

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

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    const newTeamMember = {
      name: evt.target[0].value.trim(),
      email: evt.target[1].value.trim(),
      yearsExperience: parseInt(evt.target[2].value.trim()),
      role: evt.target[3].value.trim(),
    }
    setTeam([...team,newTeamMember]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {team.map((member,idx) => {
            return (
              <TeamMember key={idx} member={member} />
                )})}
        </ul>
      <h4>Add a member to the team:</h4>
      <Form onSubmit={onSubmit} />
      </header>
    </div>
  );
}

export default App;
