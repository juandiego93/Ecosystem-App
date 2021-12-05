import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';
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
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticateService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get formLogin() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true
    if (!this.loginForm.invalid) {
      this.authService.login(this.loginForm.value).subscribe(data => {
        if (data) {
          alertify.success('Successful login')
          this.router.navigateByUrl('/dashboard');
          return
        } else {
          alertify.error('Invalid credentials. <br> Check your data')
        }
      }, err => {
        alertify.error(`${err.error.message}`)
      })
      return;
    }
    this.loading = true;
  }
}
