import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestListComponent} from "./test-list/test-list.component";
import {TestListItemDetailComponent} from "./test-list-item-detail/test-list-item-detail.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {path:''
    ,redirectTo:'/home',
    pathMatch:'full'},
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'tests',
    component: TestListComponent
  }
  ,
  {
    path:'tests/:number',
    component: TestListItemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
