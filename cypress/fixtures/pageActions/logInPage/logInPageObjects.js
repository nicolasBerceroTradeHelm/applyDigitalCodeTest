class loginPageObjects {
    signUpName = () => '[data-qa="signup-name"';
    signUpEmail = () => '[data-qa="signup-email"]';
    signUpSubmit = () => '[data-qa="signup-button"]';

    profileName = () => '[id="name"]';
    profileEmail = () => '[id="email"]';
    profilePassword = () => '[id="password"]';
    profileFirstName = () => '[id="first_name"]';
    profileLastName = () => '[id="last_name"]';
    profileCountry = () => '[id="country"]';
    profileState = () => '[id="state"]';
    profileCity = () => '[id="city"]';
    profileZip = () => '[id="zipcode"]';
    profilePhone = () => '[id="mobile_number"]'
    profileAddress = () => '[id="address1"]';
    profileSubmit = () => '[data-qa="create-account"]';

    accountCreatedContinue = () => '[data-qa="continue-button"]';
}

export default loginPageObjects;