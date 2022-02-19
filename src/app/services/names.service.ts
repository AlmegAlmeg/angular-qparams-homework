import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  namesArr: string[]
  constructor() { 
    this.namesArr = [
      "almeg",
      "ravid",
      "michal",
      "moshe",
      "nizar",
      "jenny",
      "chen",
      "ban",
      "moti",
      "john",
      "victoria",
      "eyal",
    ]
  }
}
