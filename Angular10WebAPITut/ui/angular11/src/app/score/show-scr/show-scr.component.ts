import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-scr',
  templateUrl: './show-scr.component.html',
  styleUrls: ['./show-scr.component.css']
})
export class ShowScrComponent implements OnInit {

  constructor(private service: SharedService) { }

  ScoreList: any = [];

  ModalTitle!: string;
  ActivateAddEditEmpComp: boolean = false;
  scr: any;

  ngOnInit(): void {
    this.refreshScrList();
  }

  refreshScrList() {
    this.service.getScrList().subscribe(data => {
      this.ScoreList = data;
    });
  }

}
