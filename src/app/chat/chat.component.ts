import { Component , OnDestroy, OnInit,ViewChildren, QueryList, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnDestroy,AfterViewChecked {
  message: string = '';
  userId!: string;
  messages: any[] = [];
  private pollingSubscription!: Subscription;
  @ViewChildren('messageItem') messageItems!: QueryList<ElementRef>;

  constructor(private chatService: ChatService,private router:Router) {}

  ngOnInit() {
    this.userId = this.chatService.userID;
    this.startPolling(); // Start the polling when the component is initialized
  }

  ngOnDestroy() {
    this.stopPolling(); // Stop the polling when the component is destroyed
  }

  // loadMessages() {
  //   this.chatService.getMessages().subscribe((messages) => {
  //     this.messages = messages;
  //   });
  // }

  startPolling() {
    // Define the polling interval (e.g., every 5 seconds)
    const pollingInterval = 5000; // 5 seconds in milliseconds

    // Use interval to trigger polling at the defined interval
    this.pollingSubscription = interval(pollingInterval)
      .pipe(
        switchMap(() => this.chatService.getMessages())
      )
      .subscribe((messages) => {
        this.messages = messages;
      });
  }

  stopPolling() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      const newMessage = { text: this.message, timestamp: new Date(),userId: this.chatService.userID  };
      this.chatService.addMessage(newMessage).subscribe(() => {
        // this.loadMessages();
        this.startPolling()
        this.message = '';
        setTimeout(() => {
          this.scrollToLastMessage();
        }, 0);
      });
    }
  }
  ngAfterViewChecked() {
    this.scrollToLastMessage();
  }

 scrollToLastMessage() {
    if (this.messageItems && this.messageItems.length > 0) {
      const lastMessageItem = this.messageItems.last.nativeElement;
      lastMessageItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  logout(){
    localStorage.setItem('userId','');
    this.userId = ''
    this.router.navigateByUrl('/')
  }
}
