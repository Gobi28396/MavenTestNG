$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/search.feature");
formatter.feature({
  "name": "to validate search functionality of kogan site",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat com.definitionstep.Hooksclass.beforeExecution1(Hooksclass.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user in kogan home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepsdefine.user_in_kogan_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "to verify search with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user enters \"iphone7\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepsdefine.user_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepsdefine.user_clicks_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user in kogan home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepsdefine.user_in_kogan_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters usename and password",
  "keyword": "When "
});
formatter.match({
  "location": "Stepsdefine.user_enters_usename_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepsdefine.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user in kogan home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepsdefine.user_in_kogan_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add A product in cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regresstion"
    }
  ]
});
formatter.step({
  "name": "user enters productname and click search",
  "keyword": "When "
});
formatter.match({
  "location": "Stepsdefine.user_enters_productname_and_click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select a product and click add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Stepsdefine.user_select_a_product_and_click_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click checkout for payment",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepsdefine.user_click_checkout_for_payment()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.all({By.xpath: //input[@type\u003d\u0027tel\u0027],By.className: _1Jt4D,By.name: phone,By.id: phone})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.support.pagefactory.ByAll.findElement(ByAll.java:58)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.utility.Baseclass.fill(Baseclass.java:24)\r\n\tat com.definitionstep.Stepsdefine.user_click_checkout_for_payment(Stepsdefine.java:83)\r\n\tat ✽.user click checkout for payment(src/test/resources/Features/search.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});