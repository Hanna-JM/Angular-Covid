import { Component } from '@angular/core';
import {Test} from "./shared/test";

type ViewState = 'list' | 'details';
@Component({
  selector: 'yh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid';
  test?:Test;
  viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }

  showDetails(test: Test) {
    this.test = test;
    this.viewState = 'details'
  }
}
