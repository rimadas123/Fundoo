import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  myForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void { }

  hide = false
  login() {
    if(this.myForm.valid)
    this.userService.login(this.myForm.value).subscribe(data => {
      console.log('data after login', data);
      localStorage.setItem('token',data['id'])

    }, err => {
      console.log('err after login', err);

    })
    else{
      console.log('fill');
      this.markFormGroupTouched(this.myForm)
    }
  }
   /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
