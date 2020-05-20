import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm : FormGroup

  constructor(private formBuilder:FormBuilder) {
    this.myForm = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  hide=false

}
