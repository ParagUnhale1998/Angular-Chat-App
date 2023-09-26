import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('http://localhost:4200/');
  }

  sendMessage(message: string) {
    this.socket$.next({ type: 'chat', content: message });
  }

  receiveMessages() {
    return this.socket$.asObservable();
  }
}
