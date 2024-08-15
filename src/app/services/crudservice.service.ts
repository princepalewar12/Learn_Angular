import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post('http://localhost:3000/comments', data)
  }
  getData() {
    return this.http.get('http://localhost:3000/comments')
  }
  deleteData(id: number) {
    return this.http.delete('http://localhost:3000/comments/' + id)
  }
}
