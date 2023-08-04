import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm = this.fb.group({
    firstName: ['', Validators.required, /*noWhiteSpaceValidator()*/], // new FormControl(''),
    lastName: ['', Validators.required],//new FormControl(''),
    email: ['', Validators.required/*, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")*/], //new FormControl(''),
    phoneNumber: ['',/* Validators.pattern("^(?:(?:\\+?40)|0)?7\\d{8}$")*/],//new FormControl(''),
    roles: ['', Validators.required],//new FormControl(''),
  });



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.registerForm.value);

  }
}
