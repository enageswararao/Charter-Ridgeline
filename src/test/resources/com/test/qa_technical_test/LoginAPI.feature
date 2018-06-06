Feature: Login  As a user with valid Account   I want to login   So that I can place the order

  Scenario Outline: Validate login with Valid User
    Given A username "<username>" and password "<password>"
    When I make a POST request to "/auth/login"
    Then The response status code should be "200"
    And Customer Number should be "<custNo>"
    And Comcast Account Number should be "<comcastAccountNo>"
    And Comcast Account Guid should be "<comcastAccountGuid>"
    And Payment Token should be "<paymentToken>"
    And Status should be "<status>"
    And Comcast User Guid should be "<comcastUserGuid>"
    And lines Count Total should be "<total>"
    Examples:
        | username    | password  | custNo | comcastAccountNo  | comcastAccountGuid  | paymentToken     | status | comcastUserGuid     | total |
        | john_daggot | ZP5JdLA7e | null   | john_daggot       | john_daggot         | null             | null   | john_daggot         | 0     |

Scenario Outline: Validate login with Invalid User
  Given A username "<username>" and password "<password>"
   When I make a POST request to "/auth/login"
   Then The response status code should be "<code>"
   Then The response message is "<message>"

Examples:
 | username      | password  | code  | message             |
 | invalid       | test1234! | 401   | Invalid User        |
 | qaTest11      | invalid12 | 401   | Invalid User        |
 |               |           | 405   | Missing Credentials |