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
   
  })
})