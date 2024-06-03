import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'task1',
  templateUrl: './logintask1.component.html',
  styleUrls: ['./logintask1.component.css']
})
export class Logintask1Component implements OnInit{

  constructor(private formbuild:FormBuilder, private loginServ:LoginserviceService, private route : Router){}

  loginForm!:FormGroup;
  errorMessage!:string

  ngOnInit(): void {
    this.loginForm=this.formbuild.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  loginSubmit(){
    let obj=this.loginForm.value;

    console.log(obj)
    this.loginServ.loginUser(obj).subscribe((data)=>{
      console.log(data.Status +" "+ data.UserId)
      if(data.Status===true){
        localStorage.setItem("UserId",data.UserId)
        this.route.navigate(["/dashboard",data.UserId])
      }else if (data.Status===false) {        
        this.errorMessage="Invalid User!!!"
        localStorage.clear()
      }
    })
    
  }
}
