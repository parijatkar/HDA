import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-rep',
  templateUrl: './add-edit-rep.component.html',
  styleUrls: ['./add-edit-rep.component.css']
})
export class AddEditRepComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() rep: any;
  ReportId: string;
  ReportType: string;
  ReportDate: string;
  ReportFile: string;
  Description: string;


  ngOnInit(): void {
    this.ReportId = this.rep.ReportId;
    this.ReportType = this.rep.ReportType;
    this.ReportDate = this.rep.ReportDate;
    this.ReportFile = this.rep.ReportFile;
    this.Description = this.rep.Description;
  }

 
  updateReport() {
    var val = {
      ReportType: this.ReportType,
      ReportDate: this.ReportDate,
      Description: this.Description
    };
    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
