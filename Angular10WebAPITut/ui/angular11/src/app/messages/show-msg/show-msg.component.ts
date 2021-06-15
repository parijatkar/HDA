import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-msg',
  templateUrl: './show-msg.component.html',
  styleUrls: ['./show-msg.component.css']
})
export class ShowMsgComponent implements OnInit {


  constructor(private service: SharedService) { }

  MessagesList: any = [];

  ModalTitle: string;
  ActivateAddEditMsgComp: boolean = false;
  msg: any;

  MessageTypeFilter: string = "";
  MRNFilter: string = "";
  MessagesListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshMessagesList();
  }

  addClick() {
    this.msg = {
      MRN: 0,
      Code: ""
    }
    this.ModalTitle = "Add Message";
    this.ActivateAddEditMsgComp = true;

  }

  editClick(item) {
    this.msg = item;
    this.ModalTitle = "Edit Message";
    this.ActivateAddEditMsgComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.service.deleteProc(item.MRN).subscribe(data => {
        alert(data.toString());
        this.refreshMessagesList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditMsgComp = false;
    this.refreshMessagesList();
  }


  refreshMessagesList() {
    this.service.getProcList().subscribe(data => {
      this.MessagesList = data;
      this.MessagesListWithoutFilter = data;
    });
  }

  FilterFn() {
    var MessageTypeFilter = this.MessageTypeFilter;
    var MRNFilter = this.MRNFilter;

    this.MessagesList = this.MessagesListWithoutFilter.filter(function (el) {
      return el.toString().toLowerCase().includes(
        MessageTypeFilter.toString().trim().toLowerCase()
      ) &&
        el.MessageType.toString().toLowerCase().includes(
          MRNFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc) {
    this.MessagesList = this.MessagesListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
