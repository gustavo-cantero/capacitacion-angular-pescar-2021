import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SearchResultModel } from '../search/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() result: SearchResultModel;

  constructor() {
    console.log(`new - result es ${this.result?.title}`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit - result es ${this.result?.title}`);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges - result es ${this.result?.title}`);
    for (let key in changes) {
      console.log(`"${key}" cambió:
        Actual: "${changes[key].currentValue?.title}".
        Anterior: "${changes[key].previousValue}"`);
    }
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
