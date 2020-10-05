// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   registerFormGroup: FormGroup;
//   ufc: FormControl;
//   pfc: FormControl;
//   cpfc: FormControl;
//   constructor() { }
//
//   ngOnInit(): void {
//     this.ufc = new FormControl(
//       '',
//       [Validators.required]
//     );
//     this.pfc = new FormControl();
//     this.cpfc = new FormControl();
//     this.registerFormGroup = new FormGroup({
//       username: this.ufc,
//       password: this.pfc,
//       confirm_password: this.cpfc
//     });
//     // subscribe the valueChanges
//     this.ufc.valueChanges.subscribe(val => console.log(val));
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registerFormGroup: FormGroup;
  // registerFormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
       // username: ['', [Validators.required], Validators.minLength(4)],
      username: [ '' , [Validators.required, Validators.minLength(3)] ],
      password_group: this.fb.group({
        password: [''],
        confirm_password: ''
      }, { validators: [this.passwordsValidator] })
    });
    console.log(this.registerFormGroup);
  }
  // Validator return type can only be
  // null (no error) or object {errorCode: errorMessage}
  passwordsValidator(passwordGroup): null|object{
    // object destructure
    const {password, confirm_password} = passwordGroup.value;
    // console.log(passwordGroup.value);
    return password === confirm_password ? null : {passwordsNotMatch: 'passwords do not match'};
  }
}

