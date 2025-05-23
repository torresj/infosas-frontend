import { Routes } from '@angular/router';
import {StaffPageComponent} from './components/staffs/staff-page/staff-page.component';

export const routes: Routes = [
  { path: '', component: StaffPageComponent },
  { path: 'staff/:id', component: StaffPageComponent }
];
