import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  // constructor(private authService: AuthService) { }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // Lógica de autenticación
  }
}



//onSubmit() {
  //this.submitted = true;

  //if (this.loginForm.invalid) {
    //return;
  //}

  //const username = this.loginForm.value.username;
  //const password = this.loginForm.value.password;

  //this.authService.login(username, password).subscribe(
    //(response: any) => {
      // Autenticación exitosa
      // Redirigir al usuario a la página de inicio, mostrar mensaje, etc.
    //},
    //(error: any) => {
      // Autenticación fallida
      // Mostrar mensaje de error, reiniciar formulario, etc.
    //}
  //);
//}