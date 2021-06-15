import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-med',
  templateUrl: './show-med.component.html',
  styleUrls: ['./show-med.component.css']
})
export class ShowMedComponent implements OnInit {


  constructor(private service: SharedService) { }

  MedicationsList: any = [];

  ModalTitle: string;
  ActivateAddEditDepComp: boolean = false;
  med: any;

  MedicationsCodeFilter: string = "";
  MRNFilter: string = "";
  MedicationsListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshMedList();
  }

  addClick() {
    this.med = {
      MRN: 0,
      code: ""
    }
    this.ModalTitle = "Add Medication";
    this.ActivateAddEditDepComp = true;

  }

  editClick(item) {
    this.med = item;
    this.ModalTitle = "Edit Medication";
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.service.deleteProc(item.MRN).subscribe(data => {
        alert(data.toString());
        this.refreshMedList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshMedList();
  }


  refreshMedList() {
    this.service.getMedList().subscribe(data => {
      this.MedicationsList = data;
      this.MedicationsListWithoutFilter = data;
    });
  }

  FilterFn() {
    var MedicationCodeFilter = this.MedicationsCodeFilter;
    var MRNFilter = this.MRNFilter;

    this.MedicationsList = this.MedicationsListWithoutFilter.filter(function (el) {
      return el.toString().toLowerCase().includes(
        MedicationCodeFilter.toString().trim().toLowerCase()
      ) &&
        el.DepartmentName.toString().toLowerCase().includes(
          MRNFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc) {
    this.MedicationsList = this.MedicationsListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
