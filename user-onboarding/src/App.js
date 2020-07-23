import React, {useState, useEffect} from 'react';
import Forma from './components/Form'
import User from './components/User'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import './App.css';

const emptyForm = {
  name: '',
  email: '',
  password: '',
  role: null,
  termsOfService: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  role: null
}

const initialUsers = []
const initialDisabled = true;

export default function App() {
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(emptyForm)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)


const postNewUser = (newUser) =>{
  axios
  .post(`https://reqres.in/api/users`, newUser)
  .then(res => {
    setUsers([res.data, ...users])
    setFormValues(emptyForm)
  })
  .catch(e => {
    throw `Everything is broken forever: ${e}`
  })
}

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors, [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkBoxChange = (name, isChecked) => {
    yup
    .reach(formSchema, name)
    .validate(isChecked)
    .then(valid => {
      setFormErrors({
        ...formErrors, [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues,
        [name]: isChecked, 
      }
    )
  }

  const onSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      termsOfService: formValues.termsOfService,
  }
  postNewUser(newUser)
}


useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

  return (



    <div className="App">
      <header className="App-header">
        <Forma values = {formValues}
        submit = {onSubmit}
        inputChange = {inputChange}
        checkboxChange = {checkBoxChange}
        disabled = {disabled}
        errors = {formErrors}/>
      </header>
      {
        users.map(user => {
          return (
            <User key={user.name} details={user} />
          )
        })
      }
    </div>
  );
}


