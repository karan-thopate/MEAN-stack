import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.loginForm.reset();
        this.router.navigate(["/listings"]);
      },
      err => {
        console.log(err);
      })
    }
  }
}
