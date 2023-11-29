// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-messages',
//   templateUrl: './messages.component.html',
//   styleUrls: ['./messages.component.css']
// })
// export class MessagesComponent {

// }
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}