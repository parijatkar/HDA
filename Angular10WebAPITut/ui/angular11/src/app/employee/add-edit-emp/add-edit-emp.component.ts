import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  MRN:bigint;
  PatientName:string;
  Gender: string;
  Race: string;
  DateOfBirth:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  GenderList: any = [];
  RaceList: any = [];

  ngOnInit(): void {
    this.loadGenderList();
    //this.loadRaceList();
  }

  loadGenderList() {
    this.service.getAllGenderNames().subscribe((data1: any) => {
      this.GenderList = data1;
      console.log(data1);
      this.MRN = this.emp.MRN;
      this.PatientName = this.emp.PatientName;
      this.Gender = this.emp.Gender;
      this.Race = this.emp.Race;
      this.DateOfBirth = this.emp.DateOfBirth;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
      this.service.getAllRaceNames().subscribe((data2: any) => {
        this.RaceList = data2;

        this.MRN = this.emp.MRN;
        this.PatientName = this.emp.PatientName;
        this.Gender = this.emp.Gender;
        this.Race = this.emp.Race;
        this.DateOfBirth = this.emp.DateOfBirth;
        this.PhotoFileName = this.emp.PhotoFileName;
        this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
      });
    }
  

  

  addEmployee(){
    var val = {MRN:this.MRN,
                PatientName:this.PatientName,
                Department:this.Gender,
              DateOfJoining:this.DateOfBirth,
            PhotoFileName:this.PhotoFileName};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.MRN,
      EmployeeName:this.PatientName,
      Gender: this.Gender,
      Race: this.Race,
    DateOfBirth:this.DateOfBirth,
  PhotoFileName:this.PhotoFileName};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}

