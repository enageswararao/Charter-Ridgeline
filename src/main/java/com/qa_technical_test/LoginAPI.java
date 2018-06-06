package com.qa_technical_test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Properties;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.fluent.Request;

import com.jayway.jsonpath.JsonPath;
import com.qa_technical_test.constants.Endpoints;
import com.qa_technical_test.constants.TestData;

import net.minidev.json.JSONObject;

public class LoginAPI {


	public String APIURL=null;
	Properties QACONFIG=null;
	FileInputStream fs=null;
	HashMap<String,String> result_loginapi;

	public final Charset UTF_8 = Charset.forName("UTF-8");
	public LoginAPI(){

		QACONFIG=new Properties() ;
		try {
			fs=new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qa_technical_test_config\\Environment.properties");
			QACONFIG.load(fs);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		catch (IOException e) {
		}
	}

	public String buildEndpoint(String path){
		System.out.println("BaseURL--->"+Endpoints.BASEURL+path);

		return APIURL= Endpoints.BASEURL+path;
	}

	public String  loginJson(String username,String password) {

		JSONObject json = new JSONObject();


		json.put("username", username);
		json.put("password", password);

		json.put("upEncrypted", "true");
		json.put("keepLoggedIn",true);

		return json.toString();
	}

	//POST /auth/login
	public HashMap<String,String>  postloginAPI(String baseURL,String jsonDta ) throws ClientProtocolException, IOException{
		result_loginapi=new HashMap<String,String>();
		String theString=null;
		HttpResponse response=Request.Post(baseURL)
				.addHeader("Content-Type", "application/json")
				.addHeader("Authorization ", "SYSTEM c3lzdGVtOjQpW25KUlE1WX1NfVN5TQ==")
				.bodyString(jsonDta, null)
				.execute().returnResponse();
		HttpEntity entity=response.getEntity();
		System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode()  );
		if( response.getStatusLine().getStatusCode()==200) {
			theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8);
			System.out.println("String reponse --->"+ theString);

			result_loginapi.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
			// result_loginapi.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));
			if(JsonPath.parse(theString).read("$.account.custNo")!=null)
				result_loginapi.put("custNo",JsonPath.parse(theString).read("$.account.custNo").toString());
			else
				result_loginapi.put("custNo",null);

			result_loginapi.put("comcastAccountNo",JsonPath.parse(theString).read("$.account.comcastAccountNo").toString());
			result_loginapi.put("comcastAccountGuid",JsonPath.parse(theString).read("$.account.comcastAccountGuid").toString());
			if(JsonPath.parse(theString).read("$.account.status")!=null)
				result_loginapi.put("paymentToken",JsonPath.parse(theString).read("$.account.paymentToken").toString());
			else
				result_loginapi.put("paymentToken",null);
			if(JsonPath.parse(theString).read("$.account.status")!=null)
				result_loginapi.put("status",JsonPath.parse(theString).read("$.account.status").toString());
			else
				result_loginapi.put("status",null);

			result_loginapi.put("comcastUserGuid",JsonPath.parse(theString).read("$.account.users[0].comcastUserGuid").toString());

			result_loginapi.put("total",JsonPath.parse(theString).read("$.account.linesCount.total").toString());
		}
		else if(response.getStatusLine().getStatusCode()==401) {
			theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8);
			System.out.println("String reponse --->"+ theString);
			if(theString != null && !theString.isEmpty()) {
				result_loginapi.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
				result_loginapi.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));
				result_loginapi.put("message",JsonPath.parse(theString).read("$.message").toString());
			}

		}
		else if(response.getStatusLine().getStatusCode()==405) {
			theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8);
			System.out.println("String reponse --->"+ theString);
			if(theString != null && !theString.isEmpty()) {
				result_loginapi.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
				result_loginapi.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));
				result_loginapi.put("message",JsonPath.parse(theString).read("$.message").toString());
			}

		}
		return result_loginapi;




	}


}
 