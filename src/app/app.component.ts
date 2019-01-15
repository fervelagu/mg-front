import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  user: any = {}
  isLogged = false

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {

    //get user
    /*this.user = JSON.parse(localStorage.getItem('user'))
    if(this.user){
      this.isLogged = true
    }*/

    this.authService.checkIgLoggedIn().subscribe((res)=>{
      console.log('res', res);
      this.isLogged = res;
    })

  }

  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['home'])
  }

}