describe('Inputs and submit button', () => {
    it('can navigate to the site', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'localhost')
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can enter a name', ()=>{
        cy
        .get(`input[name='name']`)
        .type('Ava')
        .should('have.value', 'Ava')
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can enter an email', ()=>{
        cy
        .get(`input[name='email']`)
        .type('ava@ava.com')
        .should('have.value', 'ava@ava.com')
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can enter a password', ()=>{
        cy
        .get(`input[name='password']`)
        .type('ThisIsAPassword')
        .should('have.value', 'ThisIsAPassword')
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can select an option', ()=>{
        cy
        .get('select')
        .select('UI/UX')
        .should('have.value', 'UI/UX')
        .select('Front-End Designer')
        .should('have.value', 'Front-End Designer')
        .select('Front-End Architect')
        .should('have.value', 'Front-End Architect')
        .select('Back-End Badass')
        .should('have.value', 'Back-End Badass')
        .select('Team Leader')
        .should('have.value', 'Team Leader')
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can check the terms of service', ()=>{
        cy
        .get('#termsOfService')
        .check()
    })
    it('can check that button is not disabled', ()=>{
        cy
        .get('#submitBtn')
        .should('not.be.disabled')
    })
    it('can click submit', ()=>{
        cy
        .get('#submitBtn')
        .click()
    })
})