import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name!: string;
  email!: string;
  message!: string;
  
  


  sendMessage() {
    // Code to send the message goes here
    console.log('Message sent:', this.name, this.email, this.message);
    
    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
