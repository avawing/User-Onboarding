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
    
    return (
        <Form>
            <Label htmlFor = "name">Name: </Label>
            <Input 
            name = "name" 
            type = "text" 
            id = "name"
            placeholder = "Name"
            values = {values.name}
            />

            <Label htmlFor = "email">Email:</Label>
            <Input 
            name = "email"
            type = "email"
            id = "email"
            placeholder = "email@email.com"
            values = {values.email}/>

            <Label htmlFor="password">Password:</Label>
            <Input
            name = "password"          
            type = "password"
            id = "password"
            placeholder = "********"
            values = {values.password}/>

            <Label htmlFor = "role">Role</Label>
            <Input
            name = "role"
            type = "select"
            id = "role">
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
            checked = {values.termsOfService === true}></Input>
            <br/>
            <Button>Submit</Button>


        </Form>
    )
}

export default Forma