import contactUsObjects from "./contactUsObjects"

const ContactUsActions = new contactUsObjects

export const fillContactUsForm = (name, email, subject, message) => {
    cy.get(ContactUsActions.contactName()).type(name)
    cy.get(ContactUsActions.contactEmail()).type(email)
    cy.get(ContactUsActions.contactSubject()).type(subject)
    cy.get(ContactUsActions.contactMessage()).type(message)

    cy.get(ContactUsActions.contactSubmit()).click()
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
}