package com.testrunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"@D:\\gobi042\\MavenTestNG\\src\\test\\resources\\Features\\failiure.txt"},glue= {"com.definitionstep"}
)

public class RerunTest {

}
