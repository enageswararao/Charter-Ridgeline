package com.test.qa_technical_test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Properties;

import com.qa_technical_test.LoginAPI;
import com.qa_technical_test.constants.Endpoints;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinitionTest {
	LoginAPI loginAPI = new LoginAPI();
	String jsonData = null;
	String baseURL = null;
	Properties QACONFIG = null;
	FileInputStream fs = null;
	HashMap<String, String> result_response;

	public StepDefinitionTest() {

		QACONFIG = new Properties();
		try {
			fs = new FileInputStream(System.getProperty("user.dir")
					+ "\\src\\main\\java\\com\\qa_technical_test_config\\Environment.properties");
			QACONFIG.load(fs);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		catch (IOException e) {
		}
	}

	@Given("^A username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void a_username_and_password(String username, String password) throws Throwable {
		System.out.println("username--->" + username + "---" + "Password----" + password);
		jsonData = loginAPI.loginJson(username, password);

	}

	@When("^I make a POST request to \"([^\"]*)\"$")
	public void i_make_a_POST_request_to(String endpoint) throws Throwable {
		System.out.println("api endpoint--->" + endpoint);
		baseURL = loginAPI.buildEndpoint(endpoint);
		System.out.println("api endpoint--->" + endpoint);

	}

	@Then("^Customer Number should be \"([^\"]*)\"$")
	public void customer_Number_should_be(String custNo) throws Throwable {
		if (result_response.get("custNo") != null)
			org.junit.Assert.assertEquals(custNo, result_response.get("custNo"));
		else
			org.junit.Assert.assertNull(result_response.get("custNo"));
	}

	@Then("^Comcast Account Number should be \"([^\"]*)\"$")
	public void comcast_Account_Number_should_be(String comcastAccountNo) throws Throwable {

		if (result_response.get("comcastAccountNo") != null)
			org.junit.Assert.assertEquals(comcastAccountNo, result_response.get("comcastAccountNo"));
		else
			org.junit.Assert.assertNull(result_response.get("comcastAccountNo"));
	}

	@Then("^Comcast Account Guid should be \"([^\"]*)\"$")
	public void comcast_Account_Guid_should_be(String comcastAccountGuid) throws Throwable {

		if (result_response.get("comcastAccountGuid") != null)
			org.junit.Assert.assertEquals(comcastAccountGuid, result_response.get("comcastAccountGuid"));
		else
			org.junit.Assert.assertNull(result_response.get("comcastAccountGuid"));

	}

	@Then("^Payment Token should be \"([^\"]*)\"$")
	public void payment_Token_should_be(String paymentToken) throws Throwable {

		if (result_response.get("paymentToken") != null)
			org.junit.Assert.assertEquals(paymentToken, result_response.get("paymentToken"));
		else
			org.junit.Assert.assertNull(result_response.get("paymentToken"));

	}

	@Then("^Status should be \"([^\"]*)\"$")
	public void status_should_be(String status) throws Throwable {

		if (result_response.get("status") != null)
			org.junit.Assert.assertEquals(status, result_response.get("status"));
		else
			org.junit.Assert.assertNull(result_response.get("status"));

	}

	@Then("^Comcast User Guid should be \"([^\"]*)\"$")
	public void comcast_User_Guid_should_be(String comcastUserGuid) throws Throwable {

		if (result_response.get("comcastUserGuid") != null)
			org.junit.Assert.assertEquals(comcastUserGuid, result_response.get("comcastUserGuid"));
		else
			org.junit.Assert.assertNull(result_response.get("comcastUserGuid"));

	}

	@Then("^lines Count Total should be \"([^\"]*)\"$")
	public void lines_Count_Total_should_be(String total) throws Throwable {
		org.junit.Assert.assertEquals(total, result_response.get("total"));

	}

	@Then("^The response status code should be \"([^\"]*)\"$")
	public void The_response_status_code_should_be(String code) throws Throwable {
		result_response = loginAPI.postloginAPI(baseURL, jsonData);
		if (result_response != null)
			org.junit.Assert.assertEquals(code, result_response.get("HTTPCODE"));
	}

	@Then("^The response message is \"([^\"]*)\"$")
	public void the_response_message_is(String message) throws Throwable {

		System.out.println("response--->" + result_response.get(message));
		if (result_response != null)
			org.junit.Assert.assertEquals(message, result_response.get("message"));

	}

}
