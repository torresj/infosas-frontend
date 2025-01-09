import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatSelectModule} from '@angular/material/select'
import {BehaviorSubject} from 'rxjs';
import {StaffService} from '../../services/staff.service';
import Staff from '../../models/staff';
import {StaffComponent} from '../staffs/staff/staff.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatProgressSpinner,
    MatSuffix,
    ReactiveFormsModule,
    StaffComponent,
    MatButton,
    MatSelectModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  staffs = new BehaviorSubject<Staff[]>([]);
  loading = new BehaviorSubject<boolean>(false);

  form: FormGroup;

  constructor(private staffService: StaffService) {
   this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl('',Validators.required),
      type: new FormControl('')
    });
  }

  save(){
    this.loading.next(true);
    if(this.form.valid){
      this.staffService.getStaffs$(this.form.value.name,this.form.value.surname, this.form.value.type).subscribe(staffs => {
          this.loading.next(false);
          this.staffs.next(staffs);
        }
      );
    }else{
      this.loading.next(false);
    }
  }
}
