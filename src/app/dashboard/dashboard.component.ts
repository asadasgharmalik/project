import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
dashboard=[{
title:"Inbound",
option:[
  {name:"ARN's Due",value:2, blue:true},
  {name:"Total ARN's Today", value:6, blue:false},
  {name:"Ready to Receive", value:5},
  {name:"Receiving", value:1},
  {name:"Received Today", value:1}],
},
{
  title:"Inventory",
option:[
  {name:"SKU's to Recorder", value:22},
  {name:"SKU's < Min", value:20},
  {name:"SKU's > Max", value:6},
  {name:"SKU's On Hand", value:32},
  {name:"Total Value (Thousand)", value:"$ 9"}],
},
{
  title:"Onbound",
option:[
  {name:"Order's Due", value:0},
  {name:"Total Orders Today", value:24},
  {name:"Ready to Allocate", value:24},
  {name:"Picking", value:0},
  {name:"Shipped Today", value:0}]
},
]; 

  ngOnInit(): void {
    
  }
  

}
