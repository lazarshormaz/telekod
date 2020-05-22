import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { AuthConst } from 'src/app/@core/consts/auth.const';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  errorMessage: string;
  checked: boolean;




  constructor(private fb: FormBuilder, private authService: AuthService, private notification: NzNotificationService, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      pin: [null, [Validators.required]],
    });
    this.checked = false
  }

  get f() { return this.validateForm.controls; }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

      if (this.validateForm.valid) {
        this.authService.login(this.f.email.value, this.f.password.value, this.f.pin.value).subscribe(
          data => {
          console.log('success', data),
           this.createAutoUpdatingNotifications(),
           localStorage.setItem(AuthConst.token, data.token);
          this.router.navigate(['/home'])
          },
          error => this.errorMessage = error.error
        )
      }
      else {
        this.errorMessage = 'Please, fill every empty field in right way'
      }
  }

  createAutoUpdatingNotifications(): void {
    this.notification.success('You are', 'logged in!');
  }

  fillPassAndPin() {
    this.checked = !this.checked
    console.log(this.checked)
    if (this.checked === true )
    {
      (<HTMLInputElement>document.getElementById('password')).value="cityslicka";
      (<HTMLInputElement>document.getElementById('pin')).value="18678";
      this.validateForm.controls['password'].setValue('cityslicka');
      this.validateForm.controls['pin'].setValue('18678')
    }

    else
    {
      (<HTMLInputElement>document.getElementById('password')).value= "";
      (<HTMLInputElement>document.getElementById('pin')).value="";
      this.validateForm.controls['password'].setValue('');
      this.validateForm.controls['pin'].setValue('')
    }
  }
}
