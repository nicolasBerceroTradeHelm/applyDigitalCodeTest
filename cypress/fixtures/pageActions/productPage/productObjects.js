class productObjects {
    productQuantity = () => '[id="quantity"]'
    addToCart = () => '[class="btn btn-default cart"]'
    checkout = () => '[class="btn btn-default check_out"]'
    checkoutComment = () => '[class="form-control"]'
    placeOrder = () => '[href="/payment"]'
    creaditCardName = () => '[data-qa="name-on-card"]'
    creditCardNumber = () => '[data-qa="card-number"]'
    creditCardExpDateMonth = () => '[data-qa="expiry-month"]'
    creditCardExpDateYear = () => '[data-qa="expiry-year"]'
    creditCardCVC = () => '[data-qa="cvc"]'
    creditCardSubmit = () => '[data-qa="pay-button"]'
    orderContinue = () => '[data-qa="continue-button"]'
}

export default productObjects