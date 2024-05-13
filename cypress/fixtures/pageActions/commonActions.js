import commonObjects from "./commonObjects"
const CommonObjects = new commonObjects

export const visitHomePage = () => {
    cy.visit('https://automationexercise.com/')
}

export const clickHomePageButton = (button) => {
    switch
    (button) {
        case 'Signup / Login':
            cy.get(CommonObjects.hrefButtonModal('login')).click()
            break;
        case 'View Cart':
            cy.get(CommonObjects.hrefButtonModal('view_cart')).eq(0).click({force: true})
            break;
        case 'Contact':
            cy.get(CommonObjects.hrefButtonModal('contact')).click()
            break;
        default:
            console.log('Invalid button')
    }
}