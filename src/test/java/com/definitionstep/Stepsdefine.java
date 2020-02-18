package com.definitionstep;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.pojo.POJOClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepsdefine extends POJOClass {

	@Given("user in kogan home page")
	public void user_in_kogan_home_page() {
		System.out.println("given");

	}
	@When("user enters {string}")
	public void user_enters(String string) {
		POJOClass p = new POJOClass();
		fill(p.getSearch(), string);
		click(p.getPopup());
	}

	@Then("user clicks search button")
	public void user_clicks_search_button() {
		POJOClass p = new POJOClass();

		click(p.getSearchclick());
	}

	@When("user enters usename and password")
	public void user_enters_usename_and_password() {
		POJOClass p = new POJOClass();
		click(p.getLogclick());
		fill(p.getUser(), "gobinath");
		fill(p.getPass(), "9876543987654");
	}

	@Then("user click login button")
	public void user_click_login_button() {
		POJOClass p = new POJOClass();
		click(p.getLoginclick());

	}

	@When("user enters productname and click search")
	public void user_enters_productname_and_click_search() throws InterruptedException {

		POJOClass p = new POJOClass();
		Thread.sleep(1000);	
		click(p.getPopup());
		fill(p.getSearch(), "nikon");
		click(p.getSearchclick());

	}

	@When("user select a product and click add to cart")
	public void user_select_a_product_and_click_add_to_cart() throws InterruptedException {
		POJOClass p = new POJOClass();
		Thread.sleep(1000);
		click(p.getPopup());
		click(p.getProduct().get(4));
		
		click(p.getAtocart());
	
		
	}

	@Then("user click checkout for payment")
	public void user_click_checkout_for_payment() throws InterruptedException {
		
		POJOClass p = new POJOClass();
		Thread.sleep(2000);
		WebElement k = d.findElement(By.xpath("//span[@class='_1VGeu']"));
		k.click();
Thread.sleep(2000);


click(p.getShopcheckout());
fill(p.getEmail(), "octals");
fill(p.getFullname(), "kavin");
fill(p.getPhnum(), "0987654321");
click(p.getCotinu());

	}

}