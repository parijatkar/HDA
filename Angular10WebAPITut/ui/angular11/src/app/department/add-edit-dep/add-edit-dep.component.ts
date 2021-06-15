import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  MRN:string;
  ObsVal:string;

  ngOnInit(): void {
    this.MRN=this.dep.DepartmentId;
    this.ObsVal=this.dep.DepartmentName;
  }

  addDepartment(){
    var val = {MRN:this.MRN,
                Obsval:this.ObsVal};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {MRN:this.MRN,
      ObsVal:this.ObsVal};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
