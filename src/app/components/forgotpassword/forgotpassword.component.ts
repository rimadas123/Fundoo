import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage(){
    if( this.email.hasError('required')){
      return 'You must enter a valid email address'
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
