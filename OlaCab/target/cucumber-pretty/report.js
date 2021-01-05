$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SmritikonaSukul/eclipse-workspace/OlaCab/src/test/java/Features/olacab.feature");
formatter.feature({
  "line": 1,
  "name": "Olacab Contact Us Functionility",
  "description": "",
  "id": "olacab-contact-us-functionility",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Providing Contact Details in the Contact Box To Submit",
  "description": "",
  "id": "olacab-contact-us-functionility;providing-contact-details-in-the-contact-box-to-submit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cname\u003e\" in the Name field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cemail\u003e\" in the Email field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters country from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003ccompany\u003e\" in the Company field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters \"\u003cphoneno\u003e\" in the Phone no.",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "olacab-contact-us-functionility;providing-contact-details-in-the-contact-box-to-submit;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "company",
        "phoneno"
      ],
      "line": 15,
      "id": "olacab-contact-us-functionility;providing-contact-details-in-the-contact-box-to-submit;;1"
    },
    {
      "cells": [
        "smriti",
        "smriti@gmail.com",
        "IBM",
        "8906064279"
      ],
      "line": 16,
      "id": "olacab-contact-us-functionility;providing-contact-details-in-the-contact-box-to-submit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5198810200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Navigate to OlaCab Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to OlaCab Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Contact Us Tab",
  "keyword": "And "
});
formatter.match({
  "location": "Olacab_stepdefination.user_navigates_to_OlaCab_Page()"
});
formatter.result({
  "duration": 8645012100,
  "status": "passed"
});
formatter.match({
  "location": "Olacab_stepdefination.click_on_Contact_Us_Tab()"
});
formatter.result({
  "duration": 3752869600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Providing Contact Details in the Contact Box To Submit",
  "description": "",
  "id": "olacab-contact-us-functionility;providing-contact-details-in-the-contact-box-to-submit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \"smriti\" in the Name field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"smriti@gmail.com\" in the Email field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters country from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters \"IBM\" in the Company field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters \"8906064279\" in the Phone no.",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "smriti",
      "offset": 13
    }
  ],
  "location": "Olacab_stepdefination.user_enters_name_in_Name_Box(String)"
});
formatter.result({
  "duration": 2199478800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smriti@gmail.com",
      "offset": 13
    }
  ],
  "location": "Olacab_stepdefination.user_enters_in_the_Email_field(String)"
});
formatter.result({
  "duration": 2301198000,
  "status": "passed"
});
formatter.match({
  "location": "Olacab_stepdefination.user_enters_country_from_dropdown()"
});
formatter.result({
  "duration": 254138700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IBM",
      "offset": 13
    }
  ],
  "location": "Olacab_stepdefination.user_enters_in_the_Company_field(String)"
});
formatter.result({
  "duration": 2180048100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8906064279",
      "offset": 13
    }
  ],
  "location": "Olacab_stepdefination.user_enters_in_the_Phone_no(String)"
});
formatter.result({
  "duration": 319359500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9R1SC065\u0027, ip: \u0027192.168.43.89\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\SMRITI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62363}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cfd11c895381157dab06e1579086412c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat StepDefinations.Olacab_stepdefination.user_enters_in_the_Phone_no(Olacab_stepdefination.java:59)\r\n\tat ✽.And user enters \"8906064279\" in the Phone no.(C:/Users/SmritikonaSukul/eclipse-workspace/OlaCab/src/test/java/Features/olacab.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 804958000,
  "status": "passed"
});
});