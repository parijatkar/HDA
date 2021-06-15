import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cond',
  templateUrl: './show-cond.component.html',
  styleUrls: ['./show-cond.component.css']
})

export class ShowCondComponent implements OnInit {


  constructor(private service: SharedService) { }

  ConditionsList: any = [];

  ModalTitle: string;
  ActivateAddEditCondComp: boolean = false;
  cond: any;

  ConditionsCodeFilter: string = "";
  MRNFilter: string = "";
  ConditionsListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshCondList();
  }

  addClick() {
    this.cond = {
      MRN: 0,
      code: ""
    }
    this.ModalTitle = "Add Condition";
    this.ActivateAddEditCondComp = true;

  }

  editClick(item) {
    this.cond = item;
    this.ModalTitle = "Edit Condition";
    this.ActivateAddEditCondComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.service.deleteCond(item.MRN).subscribe(data => {
        alert(data.toString());
        this.refreshCondList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditCondComp = false;
    this.refreshCondList();
  }


  refreshCondList() {
    this.service.getCondList().subscribe(data => {
      this.ConditionsList = data;
      this.ConditionsListWithoutFilter = data;
    });
  }

  FilterFn() {
    var ConditionsCodeFilter = this.ConditionsCodeFilter;
    var MRNFilter = this.MRNFilter;

    this.ConditionsList = this.ConditionsListWithoutFilter.filter(function (el) {
      return el.toString().toLowerCase().includes(
        ConditionsCodeFilter.toString().trim().toLowerCase()
      ) &&
        el.DepartmentName.toString().toLowerCase().includes(
          MRNFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc) {
    this.ConditionsList = this.ConditionsListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}

