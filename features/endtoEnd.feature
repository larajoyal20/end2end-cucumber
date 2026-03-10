Feature: Placing the order

Scenario: End to End test
    Given user navigates to login page
    When user logs in with email "youremail" and password "yourpassword"
    And user adds product "ADIDAS ORIGINAL" to the cart
    And user buys the product from the cart
    And user fills payment details with card "1234567890123456", month "03", year "31", ccv "332", country "India", name "joyallara thangarasu"
    Then user should see order confirmation