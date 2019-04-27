import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularReactiveForm';
  signupForm:FormGroup;
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string=""

//   constructor(private formBuilder: FormBuilder){
//     this.signupForm = this.formBuilder.group({
//       fname: new FormControl(),
//       lname: new FormControl(),
//       email: new FormControl(),
//       upassword: new FormControl()
//     })
//  }
  constructor(private formBuilder: FormBuilder){
     this.signupForm = this.formBuilder.group({
       fname:['', Validators.required],
       lname:['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10)]) ],
       email:['', Validators.compose([Validators.required, Validators.email])],
       upassword:['', Validators.required]
     })
  }

  postData(signupForm:any){
    this.firstname= signupForm.controls.fname.value;
    this.lastname= signupForm.controls.lname.value;
    this.email= signupForm.controls.email.value;
    this.password= signupForm.controls.upassword.value;
    console.log(this.firstname)
      console.log(signupForm.controls)
  }

  
}
