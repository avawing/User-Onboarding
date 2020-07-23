import React from 'react';
import { Button, Form, Label, Input} from 'reactstrap';

function Forma(props){
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props

      const onSubmit = (event) =>{
          event.preventDefault()
          submit()

      }

      const onCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked
        checkboxChange(name, checked)
      }

      const onInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        inputChange(name, value)
      }
    
    return (
        <Form onSubmit = {onSubmit}>
            <Label htmlFor = "name">Name: </Label>
            <Input 
            name = "name" 
            type = "text" 
            id = "name"
            placeholder = "Name"
            values = {values.name}
            onChange = {onInputChange}
            />

            <Label htmlFor = "email">Email:</Label>
            <Input 
            name = "email"
            type = "email"
            id = "email"
            placeholder = "email@email.com"
            values = {values.email}
            onChange = {onInputChange}/>

            <Label htmlFor="password">Password:</Label>
            <Input
            name = "password"          
            type = "password"
            id = "password"
            placeholder = "********"
            values = {values.password}
            onChange = {onInputChange}/>

            <Label htmlFor = "role">Role</Label>
            <Input
            name = "role"
            type = "select"
            id = "role"
            onChange = {onInputChange}
            value = {values.role}
            >
            <option value = 'UI/UX'>UI/UX</option>
            <option value = 'Front-End Designer'>Front-End Designer</option>
            <option value = "Front-End Architect">Front-End Architect</option>
            <option value = "Back-End Badass">Back-End Badass</option>
            <option value = "Team Leader">Team Leader</option></Input>

            <Label htmlFor = "termsOfService" check>Terms of Service:</Label>
            <Input 
            name = "termsOfService"
            type = "checkbox"
            id = "termsOfService"
            checked = {values.termsOfService === true}
            onChange = {onCheckboxChange}></Input>
            <br/>

            <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
            <Button disabled = {disabled}>Submit</Button>


        </Form>
    )
}

export default Forma