import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  name: string = '';
  number: string = '';
  comments: string = '';

  ngOnInit() {
    // Initialize any properties or perform actions on component initialization here
  }

  submitForm() {
    // Handle form submission here
    console.log('Name:', this.name);
    console.log('Number:', this.number);
    console.log('Comments:', this.comments);
  }
}

