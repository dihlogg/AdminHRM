import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthenticationApiServiceService } from 'src/app/core/services/authentication/authentication-api-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent, HttpClientModule, MessagesModule],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  userName: string = '';
  password: string = '';
  errorMessage: string = '';
  messages: Message[] = [];


  constructor(private readonly _formBuilder: FormBuilder, 
    private readonly _router: Router, 
    private messageService: MessageService,
    private readonly service: AuthenticationApiServiceService, private http: HttpClient) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { userName, password } = this.form.value;
    if (this.form.invalid) {
      return;
    }
    this.userName = userName;
    this.password = password;

    this.login();
  }

  login(): void {
    this.service.login(this.userName, this.password).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Success:', detail: 'Login successful' });
        this._router.navigate(['/dashboard']);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error:', detail: 'Invalid username or password' });
        console.error('Login failed:', error);
      }
    );
  }
}
