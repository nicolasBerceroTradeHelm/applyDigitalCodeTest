import homePageObjects from "./homePageObjects"

const HomePageObjects = new homePageObjects

export const scrollToMiddleOfScreen = () => {
    cy.scrollTo('center')
}

export const clickRandomProduct = () => {
    //Click on a random product from the list
    cy.get(HomePageObjects.productDetails())
    .eq(Math.floor(Math.random() * 10))
    .click()

    //Check if the url contains the product_details page to validate correct load
    cy.url().should('include', '/product_details/')
}

export const validateProductDetails = () => {
    //Check if the product picture is displayed
    cy.get(HomePageObjects.productPicture()).should('be.visible')
    //check if the picture is the correct one by checking the url contains the same product id
    cy.url().then(url => {
        cy.get(HomePageObjects.productPicture()).should('have.attr', 'src').and('include', url.split('/').pop())
    })
}