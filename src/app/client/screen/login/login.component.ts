import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  submitForm(){
    this.authService.postLogin(this.loginForm.value).subscribe(data => {
      console.log(data);
    })
  }

}
