import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/service/userService/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control:FormControl | null, form : FormGroupDirective | NgForm | null) : boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private userService: UserService
    ) {
    this.myForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName:['',[Validators.required]],
      email : ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [''],
      service:['advance']
    },{ validator : this.checkPasswords });
   
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame : true}
  }

  ngOnInit(): void {
  }

  hide = false

  register() {
    if(this.myForm.valid)
    this.userService.register(this.myForm.value).subscribe(data => {
      console.log('data after register', data);

    }, err => {
      console.log('err after sign up', err);

    })
    else{
      console.log('fill');
    }
  }
}
