import { Inject, Injectable } from '@angular/core';
import { KeyStorageENUM } from '../core/key-storage.enum';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setLoggedStatus(status: boolean) {
    localStorage.setItem(KeyStorageENUM.LOGGED, status.toString());
  }
  
  getLoggedStatus(): boolean{
    return localStorage.getItem(KeyStorageENUM.LOGGED) === 'true';
  }
}
