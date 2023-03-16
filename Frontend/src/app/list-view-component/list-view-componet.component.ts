import { Component, OnInit } from '@angular/core';
//import employeeData from 'src/app/employee.json';
import List from 'src/app/Model/employeelist';
import FilterData from 'src/app/filter.json';
import data from 'src/app/Model/data';
import { EmployeelistService } from '../employeelist.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

interface filterData{
  name:string;
  BU:any[];
  
}

@Component({
  selector: 'app-list-view-componet',
  templateUrl: './list-view-componet.component.html',
  styleUrls: ['./list-view-componet.component.css']
})
export class ListViewComponetComponent implements OnInit {
  lists:List[]=[]
  filterList:filterData[]=FilterData;
  
  OU:data[] =[];
  BUlist:data[]=[];
  DUlist:data[]=[];
  selectedOU:string="";
  selectedBU:string="";

  Experience:data[]=[
    {value:'Less than 2 Years', viewValue: 'Less than 2 Years'},
    {value:'2-5 Years', viewValue: '2-5 Years'},
    {value:'5-10 Years', viewValue:'5-10 Years'},
    {value:'10-15 Years', viewValue:'10-15 Years'},
    {value:'15+ Years', viewValue: '15+ Years'},  
  ]

  Skills:data[]=[
    {value:'Java', viewValue: 'Java'},
    {value:'DotNet', viewValue: 'DotNet'},
    {value:'Python', viewValue:'Python'},
    {value:'UI-React', viewValue:'UI-React'},
    {value:'UI-Angular', viewValue: 'UI-Angular'}, 

  ]

  constructor(
    private employeeservice:EmployeelistService,
    private route:ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.employeeservice.getemplist()
    .subscribe((lists:any)=>this.lists=lists);
    console.log(this.lists);

    
    this.filterList.forEach((items) => {
      // console.log(items[index].BU[index]);
      var ouvalue={
        "value":items.name,
        "viewValue":items.name
      }
      this.OU.push(ouvalue);      
      items.BU.forEach((newitems)=>{
        var Buvalue={
          "value":newitems.name,
        "viewValue":newitems.name
        }
        this.BUlist.push(Buvalue);        
      })    
    });
    
  }
  
  
  changeOU(value: any){
    this.selectedOU=value;
    this.BUlist=[];
    this.filterList.forEach((items) => {  
      if(this.selectedOU==items.name){        
      items.BU.forEach((newitems)=>{
        var Buvalue={
          "value":newitems.name,
        "viewValue":newitems.name
        }
        this.BUlist.push(Buvalue);        
      })
    }  
    });
    // console.log(this.BUlist); 
  }

  changeBU(value:any){
    this.selectedBU=value;
    this.DUlist=[];
    this.filterList.forEach((items) => {  
      if(this.selectedOU==items.name){        
      items.BU.forEach((newitems)=>{
        if(this.selectedBU==newitems.name)
        
      this.DUlist=newitems.DU;
        });
    
  }
  })
  // console.log(this.DUlist);
}
navigate(){
  //do your any operations
  this.router.navigate(['./profile-view']);
 
  }

}
