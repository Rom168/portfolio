import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  imageUrl: string | undefined;

  constructor(private storageService: StorageService){

  }

  ngOnInit(): void {

  }


}
