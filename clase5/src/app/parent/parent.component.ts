import { Component, OnInit } from '@angular/core';
import { SimpleValueService } from '../simple-value.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  viewProviders: [SimpleValueService],
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public service: SimpleValueService) { }

  ngOnInit(): void {
  }

}
