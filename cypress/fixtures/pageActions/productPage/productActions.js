import productObjects from "./productObjects"
const ProductObjects = new productObjects


export const changeQuantity = (num) => {
    cy.get(ProductObjects.productQuantity()).clear().type(num)
}

export const addToCart = () => {
    cy.get(ProductObjects.addToCart()).click()
    cy.contains('Your product has been added to cart.').should('be.visible')
}

export const checkout = () => {
    cy.get(ProductObjects.checkout()).click()
}

export const placeCommentOnCheckout = (text) => {
    cy.get(ProductObjects.checkoutComment()).type(text)
}

export const placeOrder = () => {
    cy.get(ProductObjects.placeOrder()).click()
}

export const fillCreditCard = (name, number, expMonth, expYear, cvc) => {
    cy.get(ProductObjects.creaditCardName()).type(name)
    cy.get(ProductObjects.creditCardNumber()).type(number)
    cy.get(ProductObjects.creditCardExpDateMonth()).type(expMonth)
    cy.get(ProductObjects.creditCardExpDateYear()).type(expYear)
    cy.get(ProductObjects.creditCardCVC()).type(cvc)
}

export const submitCreditCard = () => {
    cy.get(ProductObjects.creditCardSubmit()).click()
}

export const validateOrderPlaced = () => {
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
    cy.get(ProductObjects.orderContinue()).click()
}

