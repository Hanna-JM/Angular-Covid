import { Component,OnInit } from '@angular/core';
import {Test} from "../shared/test";
import {TestStoreService} from "../shared/test-store.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'yh-test-list-item-detail',
  templateUrl: './test-list-item-detail.component.html',
  styleUrls: ['./test-list-item-detail.component.css']
})
export class TestListItemDetailComponent implements OnInit {
  test?: Test;

  constructor(private mss: TestStoreService, private rout: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.rout.snapshot.paramMap;
    this.test = this.mss.getSingle(params.get('number') || '');
  }
}
// ActivatedRoute is a selected routes that users can find: includes the parameter number for the details Ansicht for
// test details which we want to show in the detail Ansicht or for the film details.
//paramMap   key:mss ,value:number
//getSingle from storeService I need a key
//rout is an instance of the ActivatedRoute
//snapshop :Attribute from ActivatedRoute/or a class that includes methods like paramMap that includes the ActivatedRoute
//rout is the activatedRoute inside it the attribute: snapshop or Datatype:snapshop and inside it there is a map:paramMap
//where the attributes of our ActivatedRout, and each map offers a method get to get through the key a value.

// we should not give a different parameter name(number) inside the get method of the params  from what it has been
//defined in the test interface otherwise we can not display the details of the list-item-detail.component.html(mentioned
// within *ngIf="testItem" ) in the browser,
// because we have bound "test" from tests (from list.component.ts)
// with the :input testItem ( from test-list-item.ts) using the selector of the item component within the list-component.html
// and also assigned the routerLink of this component to that number through this code in list-component:
//<yh-test-list-item class="item"
//                    *ngFor="let test of tests"
//                    [testItem]="test"
//                    [routerLink]="test.number">
//</yh-test-list-item>
