import {Component, OnInit} from '@angular/core';

declare const google:any;




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{


  ngOnInit(): void {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 48.3181795, lng: 7.4416241 },
      zoom: 8
    });

    new google.maps.Marker({
      position: { lat: 48.5734053, lng: 7.7521113 }, // Coordinates for Strasbourg
      map: map,
      title: 'Strasbourg'
    });
  }

}
