import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }

  getScrList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Score');
  }

  addScore(val: any) {
    return this.http.post(this.APIUrl + '/Score', val);
  }

  updateScore(val: any) {
    return this.http.put(this.APIUrl + '/Score', val);
  }

  deleteScore(val: any) {
    return this.http.delete(this.APIUrl + '/Score/' + val);
  }

  getProcList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Procedures');
  }

  addProc(val: any) {
    return this.http.post(this.APIUrl + '/Procedures', val);
  }

  updateProc(val: any) {
    return this.http.put(this.APIUrl + '/Procedures', val);
  }

  deleteProc(val: any) {
    return this.http.delete(this.APIUrl + '/Procedures/' + val);
  }

  getMedList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Medications');
  }

  addMed(val: any) {
    return this.http.post(this.APIUrl + '/Medications', val);
  }

  updateMedc(val: any) {
    return this.http.put(this.APIUrl + '/Medications', val);
  }

  deleteMed(val: any) {
    return this.http.delete(this.APIUrl + '/Medications/' + val);
  }

  getCondList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Conditions');
  }

  addCond(val: any) {
    return this.http.post(this.APIUrl + '/Conditions', val);
  }

  updateCond(val: any) {
    return this.http.put(this.APIUrl + '/Conditions', val);
  }

  deleteCond(val: any) {
    return this.http.delete(this.APIUrl + '/Conditions/' + val);
  }

  getMsgList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Messages');
  }

  addMsg(val: any) {
    return this.http.post(this.APIUrl + '/Messages', val);
  }

  updateMsg(val: any) {
    return this.http.put(this.APIUrl + '/Messages', val);
  }

  deleteMasg(val: any) {
    return this.http.delete(this.APIUrl + '/Messages/' + val);
  }

  getRepList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Reports');
  }

  
  updateRep(val: any) {
    return this.http.put(this.APIUrl + '/Reports', val);
  }

  deleteRep(val: any) {
    return this.http.delete(this.APIUrl + '/Reports/' + val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllGenderNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllGenderNames');
  }

  getAllRaceNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Employee/GetAllRaceNames');
  }

}
