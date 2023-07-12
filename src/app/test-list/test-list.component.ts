import {Component,OnInit,Output, EventEmitter} from '@angular/core';
import {Test} from "../shared/test";
import {TestStoreService} from "../shared/test-store.service";

@Component({
  selector: 'yh-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit{
  tests!:Test[];
  @Output() showDetailsEvent = new EventEmitter<Test>();
  constructor(private tss: TestStoreService) {
  }
  ngOnInit(): void {
    this.tests = this.tss.getAll();
  }
  showDetails(test: Test) {
    this.showDetailsEvent.emit(test);
  }
}
