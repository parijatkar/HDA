import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ScoreComponent } from './score/score.component';
import { ShowScrComponent } from './score/show-scr/show-scr.component';
import { AddEditScrComponent } from './score/add-edit-scr/add-edit-scr.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { ShowProcComponent } from './procedures/show-proc/show-proc.component';
import { AddEditProcComponent } from './procedures/add-edit-proc/add-edit-proc.component';
import { MedicationsComponent } from './medications/medications.component';
import { ShowMedComponent } from './medications/show-med/show-med.component';
import { AddEditMedComponent } from './medications/add-edit-med/add-edit-med.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ShowCondComponent } from './conditions/show-cond/show-cond.component';
import { AddEditCondComponent } from './conditions/add-edit-cond/add-edit-cond.component';
import { ReportsComponent } from './reports/reports.component';
import { ShowRepComponent } from './reports/show-rep/show-rep.component';
import { AddEditRepComponent } from './reports/add-edit-rep/add-edit-rep.component';
import { MessagesComponent } from './messages/messages.component';
import { ShowMsgComponent } from './messages/show-msg/show-msg.component';
import { AddEditMsgComponent } from './messages/add-edit-msg/add-edit-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    ScoreComponent,
    ShowScrComponent,
    AddEditScrComponent,
    ProceduresComponent,
    ShowProcComponent,
    AddEditProcComponent,
    MedicationsComponent,
    ShowMedComponent,
    AddEditMedComponent,
    ConditionsComponent,
    ShowCondComponent,
    AddEditCondComponent,
    ReportsComponent,
    ShowRepComponent,
    AddEditRepComponent,
    MessagesComponent,
    ShowMsgComponent,
    AddEditMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
