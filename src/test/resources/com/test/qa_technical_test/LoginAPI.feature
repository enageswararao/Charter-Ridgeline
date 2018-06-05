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
       | john_daggot | ZP5JdLA7e | 107525 | john_daggot       | john_daggot         | 655990CHITNW6557 | PR     | john_daggot         |  1    |
    
      #| Existing user | christopher_zarconi | SongMore7 | 106260 | christopher_zarconi | christopher_zarconi | null         | PR     | christopher_zarconi |     1 |

Scenario Outline: Validate login with Invalid User
  Given A username "<username>" and password "<password>"
   When I make a POST request to "/auth/login"
  Then The response message is "<message>"
Examples:
| username      | password  | message             |
| invalid       | test1234! | Invalid User        |
| qaTest11      | invalid12 | Invalid User        |
|               |           | Missing Credentials |