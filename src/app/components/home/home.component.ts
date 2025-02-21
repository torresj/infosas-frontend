import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButton} from "@angular/material/button";
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
    MatInput,
    MatLabel,
    MatProgressSpinner,
    ReactiveFormsModule,
    MatSnackBarModule,
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
  private _snackBar = inject(MatSnackBar);

  form: FormGroup;

  constructor(private staffService: StaffService) {
   this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl('',Validators.required),
      type: new FormControl('')
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 5000, verticalPosition: "top" });
  }

  search(){
    this.loading.next(true);
    if(this.form.valid){
      const name = this.form.value.name;
      const surname = this.form.value.surname;
      const type = this.form.value.type;
      this.staffService.getStaffs$(name, surname, type).subscribe(staffs => {
          this.loading.next(false);
          this.staffs.next(staffs);
          if( staffs.length == 0){
            this.openSnackBar(`No se encontraron datos para ${name} ${surname}`,"Cerrar");
          }
        }
      );
    }else{
      this.loading.next(false);
    }
  }
}
