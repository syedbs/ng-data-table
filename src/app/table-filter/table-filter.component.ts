import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-filter]',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent implements OnInit, AfterViewInit {
  @Input() nzVisible: boolean;
  @Input() isActive: boolean;
  constructor() { }

  ngOnInit(): void {
    debugger;
  }
  ngAfterViewInit(): void {
    console.log(this.nzVisible);
    console.log(this.isActive);
  }

}
