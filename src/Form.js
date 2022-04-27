import { useState, useEffect } from 'react';

function Form(props) {

  const { team, setTeam, memberToEdit, setMemberToEdit } = props;

  const initialFormValues = {
                              name: '',
                              email: '',
                              yearsExperience: '',
                              role: '',
                            };

  const [formValues,setFormValues] = useState(initialFormValues);

  const handleChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    setFormValues({...formValues,[name]: value});
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTeamMember = {
      name: evt.target[0].value.trim(),
      email: evt.target[1].value.trim(),
      yearsExperience: parseInt(evt.target[2].value.trim()),
      role: evt.target[3].value.trim(),
    }
    setTeam([...team,newTeamMember]);
  }

  const handleEdit = evt => {
    evt.preventDefault();
    const editedMember = {
                           name: evt.target[0].value.trim(),
                           email: evt.target[1].value.trim(),
                           yearsExperience: parseInt(evt.target[2].value),
                           role: evt.target[3].value,
                          };
    setTeam(team.filter(x => x !== memberToEdit).concat(editedMember));
    setFormValues(initialFormValues);
    setMemberToEdit(initialFormValues);
  }

  useEffect(() => {
    const newFormValues = Object.create(initialFormValues);
    newFormValues.name = memberToEdit.name;
    newFormValues.email = memberToEdit.email;
    newFormValues.role = memberToEdit.role;
    newFormValues.yearsExperience = memberToEdit.yearsExperience;

    setFormValues(newFormValues);
  }, [memberToEdit]);

  return (
    <form onSubmit={memberToEdit.name?handleEdit:handleSubmit}>
      <label>
        Name:
        <input type="text" value={formValues.name} name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" value={formValues.email} name="email" onChange={handleChange} />
      </label>
      <label>
        Years Experience:
        <input type="text" value={formValues.yearsExperience} name="yearsExperience" onChange={handleChange} />
      </label>
      <label>
        Role:
        <select value={formValues.role} name="role" onChange={handleChange}>
          <option value="frontend developer">Frontend Developer</option>
          <option value="backend developer">Backend Developer</option>
          <option value="data engineer">Data Engineer</option>
        </select>
      </label>
      <button type="submit">
        { memberToEdit.name?`Make changes to Team Member ${memberToEdit.name}`:'Add' }
      </button>
      <input type="submit" style={{display: 'none'}} />
    </form>
       )
}

export default Form;
