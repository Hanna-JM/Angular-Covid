import { Component,Input,OnInit } from '@angular/core';
import{Test} from "../shared/test";

@Component({
  selector: 'yh-test-list-item',
  templateUrl: './test-list-item.component.html',
  styleUrls: ['./test-list-item.component.css']
})
export class TestListItemComponent implements OnInit{
  @Input() testItem?: Test;
  ngOnInit() {
  }
}
