import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashServService } from './dash-serv.service';

@Component({
  selector: 'app-dashboardtask1',
  templateUrl: './dashboardtask1.component.html',
  styleUrls: ['./dashboardtask1.component.css']
})
export class Dashboardtask1Component implements OnInit{

  userid!:string|null
  userDetails=[]
  constructor(private actroute:ActivatedRoute, private dashServ: DashServService){}
  ngOnInit(): void {

    this.actroute.paramMap.subscribe((data)=>{
      this.userid=data.get("id")
      console.log(this.userid)
      let obj={
        "Id":this.userid
      }
      this.dashServ.fetchDetails(obj).subscribe((data)=>{
        // console.log(data.Details)
        this.userDetails= data.Details
        console.log(this.userDetails)
      })
    })
    
  }
}
