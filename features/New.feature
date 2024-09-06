Feature: Versischerungen Multiple

Scenario:Load multiple tariff result pages
Given I am on the home page
When I navigate to Versicherungen and select Privathaftpflicht
When I enter my age and Single ohne Kinder
Then I go to the Privathaftpflicht personal information page
When I enter my birth date
When I enter my zip code
When I click the Jetzt vergleichen button
When I display the tariff Result List page
Then I should see the total number of available tariffs listed above all the result list
When I scroll to the end of the result list page
Then I should see only the first 20 tariffs displayed
When I click on the button labeled 20 weitere Tarife laden
Then I should see the next 20 tariffs displayed
And I can continue to load any additional tariffs until all tariffs have been displayed
