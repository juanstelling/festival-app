import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AdminComponent } from "./components/admin/admin.component";
import { LineupComponent } from './components/lineup/lineup.component';
import { GetsetComponent } from './components/set/getset/getset.component';
import { CreatesetComponent } from './components/set/createset/createset.component';
import { UpdatesetComponent } from './components/set/updateset/updateset.component';
import { GetdjComponent } from './components/dj/getdj/getdj.component';
import { CreatedjComponent } from './components/dj/createdj/createdj.component';
import { UpdatedjComponent } from './components/dj/updatedj/updatedj.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lineup',
    component: LineupComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'sets/:id',
    component: GetsetComponent
  },
  {
    path: 'create-set',
    component: CreatesetComponent
  },
  {
    path: 'update-set/:id',
    component: UpdatesetComponent
  },
  {
    path: 'djs/:id',
    component: GetdjComponent
  },
  {
    path: 'create-dj',
    component: CreatedjComponent
  },
  {
    path: 'update-dj/:id',
    component: UpdatedjComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
