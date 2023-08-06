import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OktaAuthStateService } from '@okta/okta-angular';
import { UserClaims } from '@okta/okta-auth-js';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  profileForm!: FormGroup;
  userClaims!: UserClaims;

  constructor(private oktaAuth: OktaAuthStateService,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    // Disable email field by default
    this.disableEmailField();
    this.oktaAuth.authState$.subscribe((authState) => {
      if (authState.isAuthenticated) {
        this.userClaims = authState.idToken!.claims;
        console.log(this.userClaims);
        this.patchFormValues();
      }
    });
  }
  private initForm() {
    this.profileForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: [{value:'',disabled: true}],
      // Add other fields from UserClaims here
    });
  }
  patchFormValues() {
    this.profileForm.patchValue(this.userClaims);
  }
  onSubmit() {
    const updatedClaims = { ...this.userClaims, ...this.profileForm.value };
    this.userClaims = updatedClaims;
  }
  /**
   * Disable and Enable Form Field methods, not used.
   */
  disableEmailField() {
    this.profileForm.get('email')!.disable();
  }
  enableEmailField() {
    this.profileForm.get('email')!.enable();
  }
  
}
