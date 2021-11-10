import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonModel } from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: PersonModel;
  @Output() remove = new EventEmitter<PersonModel>();

  constructor() { }

  ngOnInit(): void {
  }

  toRemove() {
    this.remove.emit(this.person);
  }
}
