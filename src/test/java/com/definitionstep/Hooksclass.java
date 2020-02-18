package com.definitionstep;

import org.utility.Baseclass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooksclass extends Baseclass {
@Before
public void beforeExecution() {
	System.out.println("hiiiiiiiiiiiiiiii");
	Browserlaunch("https://www.kogan.com/au");
	
}
@Before("@sanity")
public void beforeExecution1() {
	d.manage().window().maximize();
}

@After("@smoke")
private void afterExecution() {
System.out.println("done it");
}
@After
public void afterExecution1() {
	System.out.println("hloooooooooooo");
d.quit();
}
}
