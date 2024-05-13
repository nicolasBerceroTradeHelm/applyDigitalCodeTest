import productObjects from "./productObjects"
const ProductObjects = new productObjects


export const changeQuantity = (num) => {
    cy.get(ProductObjects.productQuantity()).clear().type(num)
}

export const addToCart = () => {
    cy.get(ProductObjects.addToCart()).click()
    cy.contains('Your product has been added to cart.').should('be.visible')
}