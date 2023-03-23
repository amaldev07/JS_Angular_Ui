import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit {
  currentItem: string = '1';
  projectedCOntent = 1;
  constructor() {
    debugger;
  }
  ngOnInit() {
    setInterval(() => {
      this.currentItem = '' + Math.random();
    }, 1000)
    this.getRandom();
  }
  getRandom() {
    setInterval(() => {
      this.projectedCOntent = Math.random()
    }, 1000)
  }
}
