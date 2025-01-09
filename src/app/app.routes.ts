import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {StaffPageComponent} from './components/staffs/staff-page/staff-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'staff/:id', component: StaffPageComponent },
];
