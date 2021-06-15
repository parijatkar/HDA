import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-msg',
  templateUrl: './add-edit-msg.component.html',
  styleUrls: ['./add-edit-msg.component.css']
})
export class AddEditMsgComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() msg: any;
  MRN: bigint;
  body: string;
  type: string;
  msgDate: string;
  
  ngOnInit(): void {
    
  }

  uploadMessage() {
    var val = {
      MRN: this.MRN,
      body: this.body,
      type: this.type,
      msgDate: this.msgDate
    };

    var val1 = {
      MRN: this.MRN,      
      RScore: Math.round(50*(Math.random())) + 50,
      RGroup: '5',
      UpdateDate: this.msgDate
    };

    /*this.service.addMsg(val).subscribe(res => {
      alert(res.toString());
    });*/

    this.service.updateScore(val1).subscribe(res => {
      alert(res.toString());
    });
  }

 

}

