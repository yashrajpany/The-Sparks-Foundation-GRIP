const {Builder, By, Key, util} = require ('selenium-webdriver')
let driver = new Builder().forBrowser('chrome').build()

let tabToOpen =
    driver.get("https://www.thesparksfoundationsingapore.org/");
tabToOpen
    .then(function () {
        // Timeout to wait if connection is slow
        let findTimeOutP =
            driver.manage().setTimeouts({
                implicit: 10000, // 10 seconds
            });
        return findTimeOutP;
    })
    .then(function () {  
        // Test case-1: Title
        if (driver.getTitle){
            console.log('Title Verification: Successful')
        }
        else {
            console.log('Title verfication: Failed')
        }
    })
    .then(function () {
        // Test Case-2: About
        let promiseAbout = driver.findElement(By.xpath("//*[text()='About Us']"))
        return promiseAbout;
    })
    .then(function (promiseAbout) {
        let promiseClickAbout = promiseAbout.click()
        
        driver.findElement(By.xpath("//*[text()='Vision, Mission and Values']")).click() //Going to Vision, Mission and Values page
        return promiseClickAbout;
    })
    .then(function (promiseClickAbout) {
        console.log('About Us verfication: Successful')

        // Test case-3: Policies and Code
        let promisePolicies= driver.findElement(By.xpath("//*[text()='Policies and Code']"))
        return promisePolicies;
     
    })
    .then(function (promisePolicies) {
        let promiseClickPolicies= promisePolicies.click()
        
        driver.findElement(By.xpath("//*[text()='Policies']")).click() //Going to Policies page
        return promiseClickPolicies;
    })
    .then(function (promiseClickPolicies) {
        console.log('Policies verification: Successful')

        // Test case-4: Programs
        let promisePrograms= driver.findElement(By.xpath("//*[text()='Programs']"))
        return promisePrograms;
     
    })
    .then(function (promisePrograms) {
        let promiseClickPrograms= promisePrograms.click()
        
        driver.findElement(By.xpath("//*[text()='Student Scholarship Program']")).click() //Going to Student Scholarship Program page
        return promiseClickPrograms;
    })
    .then(function (promiseClickPrograms) {
        console.log('Programs verification: Successful')
        
        // Test case-5: Links
        let promiseLinks= driver.findElement(By.xpath("//*[text()='LINKS']"))
        return promiseLinks;
    })
    .then( function (promiseLinks) {
        let promiseClickLink = promiseLinks.click()
        
        return promiseClickLink;
    })
    .then( function (promiseClickLink) {
        console.log('Link verfication: Successful')

    // Test case-6: Join Us
        let promiseJoin= driver.findElement(By.xpath("//*[text()='Join Us']"))
        return promiseJoin;
    })
    .then( function (promiseJoin) {
        let promiseClickJoin = promiseJoin.click()
        
        return promiseClickJoin;
    })
    .then( function (promiseClickJoin) {
        console.log('Join verfication: Successful')

    // Test case-7: Join Us drop down element
        let promiseWhyJoin= driver.findElement(By.xpath("//*[text()='Why Join Us']"))
        return promiseWhyJoin;
    })
    .then( function (promiseWhyJoin) {
        let promiseClickWhyJoin = promiseWhyJoin.click()
        return promiseClickWhyJoin;
    })
    .then( function (promiseClickWhyJoin) {
        console.log('Why Join Us verfication: Successful')

    //Test case-8: Empty form submission
        let promiseSubmit = driver.findElement(By.className('button-w3layouts hvr-rectangle-out'))
        return promiseSubmit;
    })
    .then(function (promiseSubmit){
       
        let promiseClickSubmit = promiseSubmit.click()
        return promiseClickSubmit;
    })
    .then( function(promiseClickSubmit){
        console.log('Empty Submit warning: Successful')

        // Test case-9: Form submission
        let promiseName= driver.findElement(By.name('Name'))
        return promiseName;
    })  
    .then( function (promiseName) {
        let promiseEnterName = promiseName.sendKeys('Yashraj')
    })
    .then( function () {
        let promiseEmail= driver.findElement(By.name('Email'))
        return promiseEmail;
    })
    .then( function (promiseEmail) {
        let promiseEnterEmail = promiseEmail.sendKeys('yash@mail.com')
        return promiseEnterEmail;
    })
    .then( function () {
        driver.findElement(By.className('form-control')).click()
    })
    .then(function(){
        let promiseValue = driver.findElement(By.xpath("//*[text()='Intern']"))
        return promiseValue;
    })
    .then( function(promiseValue){
        let promiseClickValue = promiseValue.click()
        
        driver.findElement(By.className('button-w3layouts hvr-rectangle-out')).click()

        return promiseClickValue;
    })
    .then( function (){
        console.log('Form submitted: Successful')
    
        // Test case-9: Contact
        let promiseContact= driver.findElement(By.xpath("//*[text()='Contact Us']"))
        return promiseContact;
    })
    .then( function (promiseContact) {
        let promiseClickContact = promiseContact.click()
        return promiseClickContact;
    })
    .then( function (promiseClickContact) {
        console.log('Contact Us page: Successful')

        // Test case-10: Checking Contact Us page
        // Contact details
        let contact= driver.findElement(By.xpath('/html/body/div[2]/div/div/div[3]/div[2]/p[2]')).getText()
        return contact
    })
    .then( function (contact) {
        let info = "+65-8402-8590, info@thesparksfoundation.sg"

        if(info == contact)
            console.log('Contact Details: Correct')
        else
            console.log('Contact Details: Incorrect')
    })
    .then( function (){
        // Address details
        let addr= driver.findElement(By.xpath('/html/body/div[2]/div/div/div[2]/div[2]/p')).getText()
        return addr
    })
    .then( function (addr) {
        let info = "THE HANGAR, NUS ENTERPRISE\n21 HENG MUI KENG TERRACE, SINGAPORE, 119613"

        if(info == addr)
            console.log('Address Details: Correct')
        else
            console.log('Address Details: Incorrect')
    })
    .then(function(){
        let promiseLogo = driver.findElement(By.xpath('//*[@id="home"]/div/div[1]/h1/a/*'))
        return promiseLogo;
    })
    .then(function(promiseLogo){
        console.log('Logo Found')
        let promiseClickLogo = promiseLogo.click()
       
        console.log('Arrived to Home page')
    })
    
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
    });