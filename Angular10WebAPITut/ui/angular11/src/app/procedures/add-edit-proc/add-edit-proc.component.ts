import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-proc',
  templateUrl: './add-edit-proc.component.html',
  styleUrls: ['./add-edit-proc.component.css']
})
export class AddEditProcComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() proc: any;
  MRN: string;
  code: string;

  ngOnInit(): void {
    this.MRN = this.proc.MRN;
    this.code = this.proc.code;
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

  updateProcedure() {
    var val = {
      MRN: this.MRN,
      Code: this.code
    };
    this.service.updateProc(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
