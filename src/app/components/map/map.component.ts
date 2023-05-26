import {Component, OnInit} from '@angular/core';

declare const google:any;




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{


  ngOnInit(): void {
    new google.maps.Map(document.getElementById('map'), {
      center: { lat: 48.3181795, lng: 7.4416241 },
      zoom: 8
    });
  }

}
