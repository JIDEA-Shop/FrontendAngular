import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-signin',
  styleUrls:['./signin-form.component.scss'],
  //imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule],
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent implements OnInit {
  
  checked = true;
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {}

  onBack(): void {
    this._router.navigate(['/flexy/home']);
  }

  goToSignup(){
    this._router.navigate(['/signup'])
  }
}
