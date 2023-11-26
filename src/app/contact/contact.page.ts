import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  name: string = '';
  number: string = '';
  comments: string = '';

  constructor() { }

  submitForm(event: Event) {
    event.preventDefault();

    const email = 'learn2step@gmail.com'; // Replace with your desired email address
    const subject = 'Form Submission';
    const body = `Name: ${this.name}%0D%0ANumber: ${this.number}%0D%0AComments: ${this.comments}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
}
