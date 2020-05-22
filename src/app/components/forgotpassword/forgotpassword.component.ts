import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService
    ) {
    this.myForm = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]]
    }
    )}

  ngOnInit(): void {
  }
 
  forgot() {
    if(this.myForm.valid)
    this.userService.forgot(this.myForm.value).subscribe(data => {
      console.log('data after register', data);

    }, err => {
      console.log('err after sign up', err);

    })
    else{
      console.log('fill');
    }
  }
}
