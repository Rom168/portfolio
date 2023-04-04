import { Injectable } from '@angular/core';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import firebase from "firebase/compat";
import {app} from "../../environnement/environnement";



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = getStorage(app);

  constructor() { }

  async downloadImage(): Promise<string> {
    const starsRef = ref(this.storage, 'photo/MN_8pix_0005.jpg');

    try {
      const downloadUrl = await getDownloadURL(starsRef);
      return downloadUrl;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
