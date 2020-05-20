import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide=true

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  
  getErrorMessage(){
    if( this.email.hasError('required')){
      return 'You must enter a valid email address'
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage(){
    if( this.password.hasError('required')){
      return 'You must enter atleast 6 characters'
    }

    return this.password.hasError('passwors') ? 'minimum 6 characters' : '';
  }
}
