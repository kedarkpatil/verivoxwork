Feature: Versischerungen

Background:Steps 
Given I am on the home page
When I navigate to Versicherungen and select Privathaftpflicht
When I enter my age and Single ohne Kinder
Then I go to the Privathaftpflicht personal information page
When I enter my birth date
When I enter my zip code
When I click the Jetzt vergleichen button

Scenario:Verify DSL Calc
Then I should see a page that lists the available tariffs for my selection

#Scenario:Load multiple tariff result pages
#When I display the tariff Result List page
#Then I should see the total number of available tariffs listed above all the result list
#When I scroll to the end of the result list page
#Then I should see only the first 20 tariffs displayed
#When I click on the button labeled 20 weitere Tarife laden
#Then I should see the next 20 tariffs displayed
#And I can continue to load any additional tariffs until all tariffs have been displayed

Scenario:Verify offer details for a selected tariff
When I display the tariff Result List page
Then I should see the tariff price of the first tariff
When I open tariff details
Then I see tariff details sections: Weitere Leistungen, Allgemein, Tätigkeiten und Hobbys
When I see tariff details sections: Miete & Immobilien and Dokumente
Then I see the Zum Online-Antrag button
