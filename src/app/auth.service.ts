import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/"
  constructor(
    private http: Http,
    private router: Router
  ) { }

  loggedIn = false;

  signup(auth): Observable<string> {
    return this.http.post( this.url + 'signup', auth, {withCredentials:true})
    .pipe( map((res: Response) => res.json()) )
  }

  login(auth): Observable<any> {
    return this.http.post(this.url + 'login', auth,  {withCredentials:true})
    .pipe( map(res => res.json()) )
  }

  checkIgLoggedIn(): Observable<boolean>{
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if(user) this.loggedIn = !this.loggedIn;
    return of(this.loggedIn);
  }
  
}