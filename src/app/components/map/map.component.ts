import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {isPlatformBrowser} from "@angular/common";
import {firebaseConfig} from "../../../environnement/environnement";




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  apiLoaded: Observable<boolean> = of(false);

  center: google.maps.LatLngLiteral = { lat: 48.3181795, lng: 7.4416241 };
  zoom = 8;

  markerPosition: google.maps.LatLngLiteral = { lat: 48.5734053, lng: 7.7521113 };
  markerOptions: google.maps.MarkerOptions = { title: 'Strasbourg' };

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {

    if(isPlatformBrowser(this.platformId)) {
      this.apiLoaded = this.httpClient.jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${firebaseConfig.apiKey}`,
        'callback'
      ).pipe(map(() => true),
        catchError(() => of(false))
      );
    }

  }

}
