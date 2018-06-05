$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/test/qa_technical_test/LoginAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Login  As a user with valid Account   I want to login   So that I can place the order",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate login with Valid User",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-valid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I make a POST request to \"/auth/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The response status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Customer Number should be \"\u003ccustNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Comcast Account Number should be \"\u003ccomcastAccountNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Comcast Account Guid should be \"\u003ccomcastAccountGuid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Payment Token should be \"\u003cpaymentToken\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Status should be \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Comcast User Guid should be \"\u003ccomcastUserGuid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "lines Count Total should be \"\u003ctotal\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-valid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "custNo",
        "comcastAccountNo",
        "comcastAccountGuid",
        "paymentToken",
        "status",
        "comcastUserGuid",
        "total"
      ],
      "line": 15,
      "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-valid-user;;1"
    },
    {
      "cells": [
        "john_daggot",
        "ZP5JdLA7e",
        "107525",
        "john_daggot",
        "john_daggot",
        "655990CHITNW6557",
        "PR",
        "john_daggot",
        "1"
      ],
      "line": 16,
      "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-valid-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Validate login with Valid User",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-valid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A username \"john_daggot\" and password \"ZP5JdLA7e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I make a POST request to \"/auth/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The response status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Customer Number should be \"107525\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Comcast Account Number should be \"john_daggot\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Comcast Account Guid should be \"john_daggot\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Payment Token should be \"655990CHITNW6557\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Status should be \"PR\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Comcast User Guid should be \"john_daggot\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "lines Count Total should be \"1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_daggot",
      "offset": 12
    },
    {
      "val": "ZP5JdLA7e",
      "offset": 39
    }
  ],
  "location": "StepDefinitionTest.a_username_and_password(String,String)"
});
formatter.result({
  "duration": 249803813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/auth/login",
      "offset": 26
    }
  ],
  "location": "StepDefinitionTest.i_make_a_POST_request_to(String)"
});
formatter.result({
  "duration": 851887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "StepDefinitionTest.the_response_status_code_should_be(String)"
});
formatter.result({
  "duration": 3061761789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "107525",
      "offset": 27
    }
  ],
  "location": "StepDefinitionTest.customer_Number_should_be(String)"
});
formatter.result({
  "duration": 2452595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_daggot",
      "offset": 34
    }
  ],
  "location": "StepDefinitionTest.comcast_Account_Number_should_be(String)"
});
formatter.result({
  "duration": 107769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_daggot",
      "offset": 32
    }
  ],
  "location": "StepDefinitionTest.comcast_Account_Guid_should_be(String)"
});
formatter.result({
  "duration": 113756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "655990CHITNW6557",
      "offset": 25
    }
  ],
  "location": "StepDefinitionTest.payment_Token_should_be(String)"
});
formatter.result({
  "duration": 89380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PR",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.status_should_be(String)"
});
formatter.result({
  "duration": 89807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_daggot",
      "offset": 29
    }
  ],
  "location": "StepDefinitionTest.comcast_User_Guid_should_be(String)"
});
formatter.result({
  "duration": 102209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "StepDefinitionTest.lines_Count_Total_should_be(String)"
});
formatter.result({
  "duration": 114184,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#| Existing user | christopher_zarconi | SongMore7 | 106260 | christopher_zarconi | christopher_zarconi | null         | PR     | christopher_zarconi |     1 |"
    }
  ],
  "line": 20,
  "name": "Validate login with Invalid User",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "A username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I make a POST request to \"/auth/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response message is \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 25,
      "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;;1"
    },
    {
      "cells": [
        "invalid",
        "test1234!",
        "Invalid User"
      ],
      "line": 26,
      "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;;2"
    },
    {
      "cells": [
        "qaTest11",
        "invalid12",
        "Invalid User"
      ],
      "line": 27,
      "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;;3"
    },
    {
      "cells": [
        "",
        "",
        "Missing Credentials"
      ],
      "line": 28,
      "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Validate login with Invalid User",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "A username \"invalid\" and password \"test1234!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I make a POST request to \"/auth/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response message is \"Invalid User\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 12
    },
    {
      "val": "test1234!",
      "offset": 35
    }
  ],
  "location": "StepDefinitionTest.a_username_and_password(String,String)"
});
formatter.result({
  "duration": 959655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/auth/login",
      "offset": 26
    }
  ],
  "location": "StepDefinitionTest.i_make_a_POST_request_to(String)"
});
formatter.result({
  "duration": 164647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid User",
      "offset": 25
    }
  ],
  "location": "StepDefinitionTest.the_response_message_is(String)"
});
formatter.result({
  "duration": 702524741,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate login with Invalid User",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "A username \"qaTest11\" and password \"invalid12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I make a POST request to \"/auth/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response message is \"Invalid User\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qaTest11",
      "offset": 12
    },
    {
      "val": "invalid12",
      "offset": 36
    }
  ],
  "location": "StepDefinitionTest.a_username_and_password(String,String)"
});
formatter.result({
  "duration": 624375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/auth/login",
      "offset": 26
    }
  ],
  "location": "StepDefinitionTest.i_make_a_POST_request_to(String)"
});
formatter.result({
  "duration": 160798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid User",
      "offset": 25
    }
  ],
  "location": "StepDefinitionTest.the_response_message_is(String)"
});
formatter.result({
  "duration": 737051813,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate login with Invalid User",
  "description": "",
  "id": "login--as-a-user-with-valid-account---i-want-to-login---so-that-i-can-place-the-order;validate-login-with-invalid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "A username \"\" and password \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I make a POST request to \"/auth/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response message is \"Missing Credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.a_username_and_password(String,String)"
});
formatter.result({
  "duration": 727867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/auth/login",
      "offset": 26
    }
  ],
  "location": "StepDefinitionTest.i_make_a_POST_request_to(String)"
});
formatter.result({
  "duration": 156949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Missing Credentials",
      "offset": 25
    }
  ],
  "location": "StepDefinitionTest.the_response_message_is(String)"
});
formatter.result({
  "duration": 262263085,
  "error_message": "java.lang.AssertionError: expected:\u003cMissing Credentials\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.test.qa_technical_test.StepDefinitionTest.the_response_message_is(StepDefinitionTest.java:118)\r\n\tat ✽.Then The response message is \"Missing Credentials\"(com/test/qa_technical_test/LoginAPI.feature:23)\r\n",
  "status": "failed"
});
});