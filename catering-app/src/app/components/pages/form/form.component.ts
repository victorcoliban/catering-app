import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  guests: string = '';
  event: string = '';
  time: string = '';
  company: string = '';

  constructor(private db: AngularFireDatabase) {}

  onSubmit() {
    const itemRef = this.db.list('messages');
    const item = { name: this.name, email: this.email, phone: this.phone, guests: this.guests, event: this.event, time: this.time, company: this.company };
    itemRef.push(item);
    this.name = '';
    this.email = '';
    this.phone = '';
    this.guests = '';
    this.event = '';
    this.time = '';
    this.company = '';
  }
}
