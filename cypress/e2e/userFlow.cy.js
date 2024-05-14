import * as commonActions from '../fixtures/pageActions/commonActions.js'
import * as homePageActions from '../fixtures/pageActions/homePage/homePageActions.js'
import * as loginPageActions from '../fixtures/pageActions/logInPage/logInPageActions.js'
import * as productPageActions from '../fixtures/pageActions/productPage/productActions.js'
//id for unique user creation
let id = Date.now()

describe('template spec', () => {

  beforeEach(() => {
    commonActions.visitHomePage()  
  })

  
  it('view Random Product Details', () => {
    //quick front end validation the correct load of a random product
    homePageActions.scrollToMiddleOfScreen()
    homePageActions.clickRandomProduct()
    homePageActions.validateProductDetails()
  })

  it.only('Buy a product', () => {
    homePageActions.scrollToMiddleOfScreen()
    homePageActions.clickRandomProduct()
    homePageActions.validateProductDetails()
    
    productPageActions.changeQuantity(30)
    productPageActions.addToCart()

    //view cart
    commonActions.clickHomePageButton('View Cart')
    productPageActions.checkout()

    //Create account
    commonActions.clickHomePageButton('Signup / Login')
    loginPageActions.fillNewUserSignsUp(id)
    loginPageActions.validateNewUserCreation(id)

    //Go to Cart and place a comment
    commonActions.clickHomePageButton('View Cart')
    loginPageActions.validateLogInStatus(id)
    productPageActions.checkout()
    productPageActions.placeCommentOnCheckout('This is a test comment')
    productPageActions.placeOrder()
   
    //Fill Creadit Card Info
    productPageActions.fillCreditCard('Test User', '4242424242424242', '12', '2022', '123')
    productPageActions.submitCreditCard()
    productPageActions.validateOrderPlaced()

    //Logout
    commonActions.clickHomePageButton('Logout')

    //Login
    loginPageActions.fillLogIn(id)
  })
})