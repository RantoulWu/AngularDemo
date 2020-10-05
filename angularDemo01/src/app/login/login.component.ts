import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  handleSubmit(loginForm): void{
    this.auth.login(loginForm.value)
      .subscribe(response => {
        if (response.success){
          this.auth.user = response.user;
          // go back to previous route! angular will maintain a route stack!
          this.location.back();
        }
      });
  }
  constructor(private auth: AuthService, private location: Location) { }

  ngOnInit(): void {
  }

}
