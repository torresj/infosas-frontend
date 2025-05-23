import { Routes } from '@angular/router';
import {StaffPageComponent} from './components/staffs/staff-page/staff-page.component';
import {MaintenanceComponent} from "./components/maintenance/maintenance.component";

export const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: 'staff/:id', component: StaffPageComponent }
];
