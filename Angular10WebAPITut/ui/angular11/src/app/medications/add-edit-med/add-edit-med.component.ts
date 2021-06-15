import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-med',
  templateUrl: './add-edit-med.component.html',
  styleUrls: ['./add-edit-med.component.css']
})
export class AddEditMedComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() med: any;
  MRN: string;
  code: string;

  ngOnInit(): void {
    this.MRN = this.med.MRN;
    this.code = this.med.code;
  }

  addProcedure() {
    var val = {
      MRN: this.MRN,
      Code: this.code
    };
    this.service.addProc(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var val = {
      MRN: this.MRN,
      Code: this.code
    };
    this.service.updateProc(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
