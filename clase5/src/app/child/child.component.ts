import { Component, OnInit } from '@angular/core';
import { SimpleValueService } from '../simple-value.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public service: SimpleValueService) { }

  ngOnInit(): void {
  }

}
