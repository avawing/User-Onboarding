import React from 'react';
import { Button, Form, Label, Input, FormText } from 'reactstrap';

function Forma(){
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
            <option>UI/UX</option>
            <option>Front-End Designer</option>
            <option>Front-End Architect</option>
            <option>Back-End Badass</option>
            <option>Team Leader</option></Input>

            <Label htmlFor = "termsOfService" check>Terms of Service:</Label>
            <Input 
            name = "termsOfService"
            type = "checkbox"
            id = "termsOfService"
            check>{' '}I agree! </Input>


        </Form>
    )
}

export default Forma