import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  isLogged = false
  auth = {}
  user = null
  logError = null
  reviews: any = {}
  notes: any = {}


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      this.user = user
      this.login()
    })
  }

  login(){
    this.authService.login(this.auth)
    .subscribe(user => {
      this.user = user
      this.isLogged = true
      this.reviews = user.reviews
      this.notes = user.notes
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['home']);
    })
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['home'])
    }
  }
  
}