import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-rep',
  templateUrl: './show-rep.component.html',
  styleUrls: ['./show-rep.component.css']
})
export class ShowRepComponent implements OnInit {

  constructor(private service: SharedService) { }

  ReportList: any = [];

  ModalTitle: string;
  ActivateAddEditRepComp: boolean = false;
  rep: any;

  ReportIdFilter: string = "";
  ReportTypeFilter: string = "";
  ReportListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshRepList();
  }

  addClick() {
    this.rep = {
      ReportId: 0,
      ReportType: "",
      ReportDate: ""
    }
    this.ModalTitle = "Report Summary";
    this.ActivateAddEditRepComp = true;

  }

  editClick(item) {
    this.rep = item;
    this.ModalTitle = "Edit Report";
    this.ActivateAddEditRepComp = true;
  }

  

  closeClick() {
    this.ActivateAddEditRepComp = false;
    this.refreshRepList();
  }


  refreshRepList() {
    this.service.getDepList().subscribe(data => {
      this.ReportList = data;
      this.ReportListWithoutFilter = data;
    });
  }

  FilterFn() {
    var ReportIdFilter = this.ReportIdFilter;
    var ReportTypeFilter = this.ReportTypeFilter;

    this.ReportList = this.ReportListWithoutFilter.filter(function (el) {
      return el.DepartmentId.toString().toLowerCase().includes(
        ReportIdFilter.toString().trim().toLowerCase()
      ) &&
        el.ReportType.toString().toLowerCase().includes(
          ReportTypeFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc) {
    this.ReportList = this.ReportListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
