import { useState } from 'react';

function Form(props) {

  const { onSubmit } = props;

  const initialFormValues = {
                              name: '',
                              email: '',
                              yearsExperience: '',
                              role: '',
                            };

  const [formValues,setFormValues] = useState(initialFormValues);

  const handleChange = evt => {
    console.log(evt);
    const name = evt.target.name;
    const { value } = evt.target;
    setFormValues({...formValues,[name]: value});
  }

  const handleSubmit = evt => {
    onSubmit(evt);
    setFormValues(initialFormValues);
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add</button>
    </form>
       )
}

export default Form;
