import React from 'react';
import { Button, Form, Label, Input} from 'reactstrap';

function Forma(props){
    const {} = props
    return (
        <Form>
            <Label htmlFor = "name">Name: </Label>
            <Input 
            name = "name" 
            type = "text" 
            id = "name"
            placeholder = "Name"/>

            <Label htmlFor = "email">Email:</Label>
            <Input 
            name = "email"
            type = "email"
            id = "email"
            placeholder = "email@email.com"/>

            <Label htmlFor="password">Password:</Label>
            <Input
            name = "password"          
            type = "password"
            id = "password"
            placeholder = "********"/>

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
            check>{' '}I agree! </Input>
            <br/>
            <Button>Submit</Button>


        </Form>
    )
}

export default Forma