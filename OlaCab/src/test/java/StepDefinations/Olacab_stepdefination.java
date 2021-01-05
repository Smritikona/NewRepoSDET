package StepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import Utilitis.Hooks;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Olacab_stepdefination {
	
	WebDriver driver = Hooks.driver; 
	
	@Given("^User navigates to OlaCab Page$")
	public void user_navigates_to_OlaCab_Page() {
		driver.manage().window().maximize();
		driver.get("https://corporate.olacabs.com/#home");
	}

	@Given("^Click on Contact Us Tab$")
	public void click_on_Contact_Us_Tab() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("link-contact")).click();
	    Thread.sleep(3000);
	}

	@When("^user enters \"([^\"]*)\" in the Name field$")
	public void user_enters_name_in_Name_Box(String name) throws InterruptedException {	    
	    driver.findElement(By.xpath("//input[@name='name' and @id='email43']")).sendKeys(name);
	    Thread.sleep(2000);
	}


	@When("^user enters \"([^\"]*)\" in the Email field$")
	public void user_enters_in_the_Email_field(String email) throws InterruptedException {
		driver.findElement(By.name("email")).sendKeys(email);
		Thread.sleep(2000);
	  
	}

	@When("^user enters country from dropdown$")
	public void user_enters_country_from_dropdown() {
		Select drpCountry = new Select(driver.findElement(By.xpath("//form[@name='contactForm']//select[@id='country']")));
		drpCountry.selectByValue("INDIA");
	    
	}

	@When("^user enters \"([^\"]*)\" in the Company field$")
	public void user_enters_in_the_Company_field(String comp) throws InterruptedException {
		driver.findElement(By.name("corporate_name")).sendKeys(comp);
		Thread.sleep(2000);
	 	 
	}

	@When("^user enters \"([^\"]*)\" in the Phone no\\.$")
	public void user_enters_in_the_Phone_no(String phone) throws InterruptedException {
	    driver.findElement(By.name("phone_no")).sendKeys(phone);
	    Thread.sleep(2000);
	}

}
