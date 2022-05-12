import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  private setUrl = "http://localhost:8090/sets/"

  constructor(private http: HttpClient) { }

  getAllSets() {
    return this.http.get(this.setUrl)
  }

  getSet(id: number) {
    return this.http.get(this.setUrl + id)
  }

  createSet(data: any): Observable<object> {
    let body = JSON.stringify(data);
    console.log(body)
    return this.http.post(this.setUrl, body, httpOptions)
  }

  updateSet(id: number | undefined, set: any) {
    return this.http.put(this.setUrl + id, set)
  }

  deleteSet(id: number) {
    return this.http.delete(this.setUrl + id)
  }

}
