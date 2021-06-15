import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-proc',
  templateUrl: './show-proc.component.html',
  styleUrls: ['./show-proc.component.css']
})
export class ShowProcComponent implements OnInit {  


  constructor(private service: SharedService) { }

  ProceduresList: any = [];

  ModalTitle: string;
  ActivateAddEditProcComp: boolean = false;
  proc: any;

  ProcedureCodeFilter: string = "";
  MRNFilter: string = "";
  ProceduresListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshProcList();
  }

  addClick() {
    this.proc = {
      MRN: 0,
      Code: ""
    }
    this.ModalTitle = "Add Procedure";
    this.ActivateAddEditProcComp = true;

  }

  editClick(item) {
    this.proc = item;
    this.ModalTitle = "Edit Procedure";
    this.ActivateAddEditProcComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.service.deleteProc(item.MRN).subscribe(data => {
        alert(data.toString());
        this.refreshProcList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditProcComp = false;
    this.refreshProcList();
  }


  refreshProcList() {
    this.service.getProcList().subscribe(data => {
      this.ProceduresList = data;
      this.ProceduresListWithoutFilter = data;
    });
  }

  FilterFn() {
    var ProcedureCodeFilter = this.ProcedureCodeFilter;
    var MRNFilter = this.MRNFilter;

    this.ProceduresList = this.ProceduresListWithoutFilter.filter(function (el) {
      return el.toString().toLowerCase().includes(
        ProcedureCodeFilter.toString().trim().toLowerCase()
      ) &&
        el.ProcedureCode.toString().toLowerCase().includes(
          MRNFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc) {
    this.ProceduresList = this.ProceduresListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
