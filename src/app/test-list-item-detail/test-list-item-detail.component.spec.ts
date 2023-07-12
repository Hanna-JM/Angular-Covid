import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListItemDetailComponent } from './test-list-item-detail.component';

describe('TestListItemDetailComponent', () => {
  let component: TestListItemDetailComponent;
  let fixture: ComponentFixture<TestListItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestListItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
