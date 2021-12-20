# Lightning-Map / LWR Site bug
## [Demo](https://bd1887-developer-edition.eu32.force.com/mapbug/)

### Setup
- Create a lightning-map component that passes a list of map markers to the map
- Create a community site using the "Build Your Own (LWR)" template
- Add the map component to a page on the site and preview / publish the page

### Bug #1
##### To Reproduce:
- Click a map marker in the Google Maps iframe (Not the list view)

##### Expected Behavior
- The selected map marker's description opens

##### Actual Behavior
- The selected map marker's description opens

### Bug #2
##### To Reproduce:
- Click a map marker in the List View (Not the iframe)

##### Expected Behavior
- Map Iframe pans to the selected map marker and opens the description

##### Actual Behavior
- Map does not pan and description does not open

### Bug #3
##### To Reproduce:
- Set the selected-marker-value attribute of the lightning-maps component

##### Expected Behavior
- Map marker description opens in Google Maps iframe

##### Actual Behavior
- Nothing. The map marker changes in the list view, but not in the iframe