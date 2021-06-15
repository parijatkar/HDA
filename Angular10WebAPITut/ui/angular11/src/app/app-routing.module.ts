import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ScoreComponent } from './score/score.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { MedicationsComponent } from './medications/medications.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ReportsComponent } from './reports/reports.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
{path:'employee',component:EmployeeComponent},
{ path: 'department', component: DepartmentComponent },
{ path: 'score', component: ScoreComponent },
{ path: 'procedures', component: ProceduresComponent },
{ path: 'medications', component: MedicationsComponent },
{ path: 'conditions', component: ConditionsComponent },
{ path: 'reports', component: ReportsComponent },
{ path: 'messages', component: MessagesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
