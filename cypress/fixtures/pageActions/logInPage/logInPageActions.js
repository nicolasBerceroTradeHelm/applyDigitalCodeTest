import loginPageObjects from "./logInPageObjects"
const LoginPageObjects = new loginPageObjects


export const fillNewUserSignsUp = (id) => {
    cy.get(LoginPageObjects.signUpName()).type('TestUser'+ id)
    cy.get(LoginPageObjects.signUpEmail()).type('test'+ id + '@test.com')   
    cy.get(LoginPageObjects.signUpSubmit()).click()
}

export const validateNewUserCreation= (id) => {
    //Validate that the name and email are correctly pre filled
    cy.get(LoginPageObjects.profileName()).should('have.value', 'TestUser'+ id)
    cy.get(LoginPageObjects.profileEmail()).should('have.value', 'test'+ id + '@test.com')   
    //Complete the profile
    cy.get(LoginPageObjects.profilePassword()).type('TestPassword'+ id)
    cy.get(LoginPageObjects.profileFirstName()).type('TestFirstName'+ id)
    cy.get(LoginPageObjects.profileLastName()).type('TestLastName'+ id)
    cy.get(LoginPageObjects.profileCountry()).select('United States')
    cy.get(LoginPageObjects.profileState()).type('Texas')
    cy.get(LoginPageObjects.profileCity()).type('Dallas')
    cy.get(LoginPageObjects.profileZip()).type('75201')
    cy.get(LoginPageObjects.profilePhone()).type('214-555-1212')
    cy.get(LoginPageObjects.profileAddress()).type('123 Main St')

    cy.get(LoginPageObjects.profileSubmit()).click()

    //Validate the account was created
    cy.url().should('include', 'account_created')
    cy.contains('Account Created!').should('exist')    
}

export const validateLogInStatus = (id) => {
    cy.get(LoginPageObjects.homePageLogInUser()).should('have.text', 'TestUser'+ id)
}

export const fillLogIn = (id) => {
    cy.get(LoginPageObjects.logInEmail()).type('test'+ id + '@test.com')
    cy.get(LoginPageObjects.logInPassword()).type('TestPassword'+ id)
    cy.get(LoginPageObjects.logInSubmit()).click()
}