import * as commonActions from '../fixtures/pageActions/commonActions.js'
import * as homePageActions from '../fixtures/pageActions/homePage/homePageActions.js'
import * as loginPageActions from '../fixtures/pageActions/logInPage/logInPageActions.js'
import * as productPageActions from '../fixtures/pageActions/productPage/productActions.js'
import * as contactUsPageActions from '../fixtures/pageActions/contactUsPage/contactUsActions.js'
//id for unique user creation, this will help with mantining the same user for all test cases
let id = Date.now()

describe('Apply Digital', () => {

  beforeEach(() => {
    commonActions.visitHomePage()  
  })

  it('Buy a product', () => {

    //ROLY VO
        //ROLY VO

            //ROLY VO

                //ROLY VO

                    //ROLY VO

                        //ROLY VO



    //Scroll to middle of the page and click on a random product
    homePageActions.scrollToMiddleOfScreen()
    homePageActions.clickRandomProduct()
    homePageActions.validateProductDetails()
    
    //Add to cart
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
    loginPageActions.validateLogInStatus(id)

    //Contact Us
    commonActions.clickHomePageButton('Contact Us')
    contactUsPageActions.fillContactUsForm('Test User'+ id, 'test'+ id + '@test.com', 'Test Subject', 'Test Message')

    //Logout
    commonActions.clickHomePageButton('Logout')
  })
})