import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, DoCheck, OnChanges{
  title = 'MSI-E';
  user ;
  constructor(private auth: AuthService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.user = this.auth.user;
  }
  ngDoCheck(): void {
    this.user = this.auth.user;
  }
  ngOnChanges(): void {
    this.user = this.auth.user;
  }

  logout(): void{
   // this.auth.user = null;
    this.auth.logout().subscribe(response => {
      if (response.success === true){
        this.auth.user = null;
        this.user = this.auth.user;
        console.log( 'logged out successfully!' );
      }
    });
    // window.location.reload();
    this.router.navigateByUrl(`${environment.API_URL}`).then();
  }
}
