import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:3000/messages';
  private userApiUrl = 'http://localhost:3000/users';

 userID:any=localStorage.getItem('userId');

  constructor(private http: HttpClient) {
  //  this.userID = localStorage.getItem('userId');
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMessage(message: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, message);
  }
  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.userApiUrl);
  }
  addUser(userData: any): Observable<any> {
    return this.http.post<any>(this.userApiUrl, userData);
  }
  getUserById(userId: any): Observable<any> {
    const url = `${this.userApiUrl}/${userId}`;
    return this.http.get<any>(url);
  }
}
