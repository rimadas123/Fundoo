import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/service/userService/user.service';
import { ActivatedRoute, Params } from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control:FormControl | null, form : FormGroupDirective | NgForm | null) : boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
    ) {
    this.myForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['']
    },{ validator : this.checkPasswords });
   
    this.activatedRoute.params.subscribe((params: Params) => {
      let key = params['token'];
      console.log(key);
      localStorage.setItem('tokenName',key);
    });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.newPassword.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame : true}
  }

  ngOnInit(): void {
  }

  hide=false

  reset() {
    if(this.myForm.valid)
    this.userService.reset(this.myForm.value).subscribe(data => {
      console.log('data after resetting password', data);

    }, err => {
      console.log('error', err);

    })
    else{
      console.log('fill');
    }
  }

}
