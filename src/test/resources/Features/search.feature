Feature: to validate search functionality of kogan site

  Background: 
    Given user in kogan home page

  @sanity
  Scenario: to verify search with valid credentials
    When user enters "iphone7"
    Then user clicks search button

  @smoke
  Scenario: To verify login with valid credentials
    When user enters usename and password
    Then user click login button
   @regresstion 
    Scenario: Add A product in cart
    When user enters productname and click search
    And user select a product and click add to cart
    Then user click checkout for payment
    
    
