import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationApiServiceService } from 'src/app/core/services/authentication/authentication-api-service.service';
import { HttpClient } from '@angular/common/http';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, AngularSvgIconModule, ButtonComponent, ButtonModule, ReactiveFormsModule],
  providers: [MessageService] 
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType = false; 
  userName: string = '';
  email: string = '';
  password: string = '';
  messages: Message[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private service: AuthenticationApiServiceService, 
    private _router: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue] 
    }, { validator: this.passwordsMatch }); 
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    
    const { userName, email, password } = this.form.value;
    this.userName = userName;
    this.email = email;
    this.password = password;

    this.register();
  }

  register(): void {
    this.service.register({ userName: this.userName, email: this.email, password: this.password }).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Success:', detail: 'Registration successful. Please log in.' });
        this._router.navigate(['/auth/sign-in']);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error:', detail: 'Registration failed. Please try again.' });
        console.error('Registration failed:', error);
      }
    );
  }

  passwordsMatch(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}
