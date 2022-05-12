import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class DjsService {
  private djUrl = 'http://localhost:8090/djs/';

  constructor(private http: HttpClient) { }

  getAllDjs() {
    return this.http.get(this.djUrl)
  }

  getDj(id: number) {
    return this.http.get(this.djUrl + id)
  }

  createDj(data: any): Observable<object> {
    let body = JSON.stringify(data);
    console.log(body)
    return this.http.post(this.djUrl, body, httpOptions)
  }

  updateDj(id: number | undefined, dj: any) {
    return this.http.put(this.djUrl + id, dj)
  }

  deleteDj(id: number) {
    return this.http.delete(this.djUrl + id)
  }

}
