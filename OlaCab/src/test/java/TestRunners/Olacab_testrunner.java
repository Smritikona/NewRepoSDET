package TestRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\SmritikonaSukul\\eclipse-workspace\\OlaCab\\src\\test\\java\\Features\\olacab.feature",
		glue = {"StepDefinations","Utilitis"}, dryRun = false , monochrome = true ,
		plugin = { "pretty", "html:target/cucumber-pretty"}
		)

public class Olacab_testrunner {

}
