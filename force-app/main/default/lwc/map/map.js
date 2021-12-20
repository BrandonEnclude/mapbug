import { LightningElement } from 'lwc';

export default class LightningMapExample extends LightningElement {
   selectedMarker;

    handleMarkerSelect(e) {
        const selectedMarkerValue = e.target.selectedMarkerValue
        console.log(`Selected Marker Value: ${selectedMarkerValue}`)
        this.selectedMarker = selectedMarkerValue === undefined ? 'undefined' : selectedMarkerValue
    }

    selectedMarker = 'm2';
    mapMarkers = [
        {
            location: {
                Latitude: 53.3538833,
                Longitude: -6.2652372
            },
            value: 'm1',
            icon: 'standard:account',
            title: 'Marker 1'
        },
        {
            location: {
                Latitude: 53.3498146,
                Longitude: -6.2624412
            },
            value: 'm2',
            icon: 'standard:account',
            title: 'Marker 2'
        },
        {
         location: {
             Latitude: 53.3530935,
             Longitude: -6.2642722
         },
         value: 'm3',
         icon: 'standard:account',
         title: 'Marker 3'
     },
    ];

}