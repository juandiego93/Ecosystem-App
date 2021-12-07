import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';
import { UserLogin } from '../../../core/tools/classes/UserLogin.models';
import { Session } from 'src/core/tools/classes/Session.models';
import { StorageService } from 'src/app/services/storage/storage.service';
declare var alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public submitted: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticateService,
    private storageService: StorageService,
  ) {
    this.loginForm = this.formBuilder.group({
      IDNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  // convenience getter for easy access to form fields
  get formLogin() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true
    if (this.loginForm.valid) {
      this.authService.login(new UserLogin(this.loginForm.value)).subscribe(data => {
        alertify.success(`You are logged on`)
        this.correctLogin(data)
      }, err => {
        alertify.error(`${err.message}`)
      })
      return;
    }
    this.loading = true;
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['dashboard']);
  }
}
