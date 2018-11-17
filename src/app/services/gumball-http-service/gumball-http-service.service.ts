import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GumballHttpServiceService {

  constructor(private http: HttpClient) { }

  getCount(): Promise<any> {
    return this.http.get('/gumball/count').toPromise();
  }

  eject(): Promise<any> {
    return this.http.get('/gumball/eject').toPromise();
  }

  insertQuarter(): Promise<any> {
    return this.http.get('/gumball/insertQuarter').toPromise();
  }

  getmessage(): Promise<any> {
    return this.http.get('/gumball/message').toPromise();
  }

  refill(): Promise<any> {
    return this.http.get('/gumball/refill').toPromise();
  }

  takeGumball(): Promise<any> {
    return this.http.get('/gumball/takeGumball').toPromise();
  }

  turnCrank(): Promise<any> {
    return this.http.get('/gumball/turnCrank').toPromise();
  }
}
