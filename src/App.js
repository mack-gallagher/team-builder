import { useState } from 'react';
import './App.css';
import Form from './Form.js';
import TeamMember from './TeamMember.js';

function App() {

  const defaultFormValues = {
                              name: '',
                              email: '',
                              yearsExperience: '',
                              role: '',
                            };

  const [team, setTeam] = useState([
    { name:  'Leigh Garrett',  
      email: 'leighagarrett@gmail.com',
      yearsExperience: 10,
      role:  'frontend developer',
    },
    { name:  'Barry Granger',
      email: 'grangerbarry@gmail.com',
      yearsExperience: 1,
      role:  'backend developer',
    },
    {
      name:  'Calista Christian',
      email: 'cchristian@gmail.com',
      yearsExperience: 3,
      role:  'data engineer',
    }
  ]);

  const [memberToEdit,setMemberToEdit] = useState(defaultFormValues);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {team.map((member,idx) => {
            return (
              <TeamMember 
                key={idx} 
                member={member}
                team={team}
                memberToEdit={memberToEdit}
                setMemberToEdit={setMemberToEdit}
              />
                )})}
        </ul>
      <h4>Add a member to the team:</h4>
      <Form 
        memberToEdit={memberToEdit} 
        team={team}
        setTeam={setTeam}
      />
      </header>
    </div>
  );
}

export default App;
