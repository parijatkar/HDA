import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cond',
  templateUrl: './add-edit-cond.component.html',
  styleUrls: ['./add-edit-cond.component.css']
})
export class AddEditCondComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() cond: any;
  MRN: string;
  code: string;
  description: string;
  date: string;

  ngOnInit(): void {
    this.MRN = this.cond.MRN;
    this.code = this.cond.code;
  }

  addCondition() {
    var val = {
      MRN: this.MRN,
      Code: this.code
    };
    this.service.addProc(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateCondition() {
    var val = {
      MRN: this.MRN,
      Code: this.code
    };
    this.service.updateProc(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
