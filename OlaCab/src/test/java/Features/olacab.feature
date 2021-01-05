Feature: Olacab Contact Us Functionility

  Background: Navigate to OlaCab Page
    Given User navigates to OlaCab Page
    And Click on Contact Us Tab

  Scenario Outline: Providing Contact Details in the Contact Box To Submit
    When user enters "<name>" in the Name field
    And user enters "<email>" in the Email field
    And user enters country from dropdown
    And user enters "<company>" in the Company field
    And user enters "<phoneno>" in the Phone no.

    Examples: 
      | name   | email            | company | phoneno    |
      | smriti | smriti@gmail.com | IBM     | 8906064279 |
