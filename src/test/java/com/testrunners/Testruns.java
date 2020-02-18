package com.testrunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src\\test\\resources"},glue= {"com.definitionstep"},
dryRun=false,monochrome=true,

strict=true,
plugin= {"html:D:\\gobi042\\MavenTestNG\\Reports",
		"json:D:\\gobi042\\MavenTestNG\\Reports\\output.json",
		"rerun:D:\\gobi042\\MavenTestNG\\src\\test\\resources\\Features\\failiure.txt"}
)
public class Testruns {

}
