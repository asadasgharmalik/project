import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  advancedFilter = [
    {
      areaTitle: "Open Inquiries", panelOpenState: false,
      inquiries: ["Order Inq", "Primary Inq", "Ref Inq"]
    },
    {
      areaTitle: "History Inquiries", panelOpenState: false,
      inquiries: ["Order Inq2", "Primary Inq2"]
    },
    {
      areaTitle: "BOL Inquiries", panelOpenState: false,
      inquiries: ["101- By Order Date", "102- By Ship-to Name", "Ref Inq3"]
    },
    {
      areaTitle: "Open Order Inquiries", panelOpenState: false,
      inquiries: ["Order Inq3", "Primary Inq3"]
    },
    {
      areaTitle: "History Shipment Inquiries", panelOpenState: false,
      inquiries: ["Order Inq3", "Primary Inq3", "Ref Inq3"]
    },
  ];


  ngOnInit(): void {
  }

}