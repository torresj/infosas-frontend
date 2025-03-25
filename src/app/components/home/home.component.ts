import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatSelectModule} from '@angular/material/select'
import {BehaviorSubject} from 'rxjs';
import {StaffService} from '../../services/staff.service';
import Staff from '../../models/staff';
import {StaffComponent} from '../staffs/staff/staff.component';
import { MatDialog , MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';


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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  readonly dialog = inject(MatDialog);

  staffs = new BehaviorSubject<Staff[]>([]);
  loading = new BehaviorSubject<boolean>(false);
  private _snackBar = inject(MatSnackBar);
  submit = false;

  form: FormGroup;

  constructor(
    private staffService: StaffService
  ) {
   this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      type: new FormControl(''),
      dni: new FormControl('')
    }, { validators: this.customValidator()});
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 5000, verticalPosition: "top" });
  }

  onInputChange() {
    if (this.isPersonalFieldsFilled()) {
      this.form.controls['dni'].disable();
    } else {
      this.form.controls['dni'].enable();
    }

    if (this.isDniFieldFilled()) {
      this.form.controls['name'].disable();
      this.form.controls['surname'].disable();
      this.form.controls['type'].disable();
    } else {
      this.form.controls['name'].enable();
      this.form.controls['surname'].enable();
      this.form.controls['type'].enable();
    }
  }

  search(){
    this.submit = true;
    this.loading.next(true);
    if(this.form.valid){
      const name = this.form.value.name;
      const surname = this.form.value.surname;
      const type = this.form.value.type;
      const dni = this.form.value.dni;
      this.staffService.getStaffs$(name, surname, type, dni).subscribe(staffs => {
          this.loading.next(false);
          this.staffs.next(staffs);
          if(dni != undefined && dni != ''){
            this.dialog.open(DniAlertComponent)
          }
          if( staffs.length == 0){
            this.openSnackBar(`No se encontraron datos para ${name} ${surname}`,"Cerrar");
          }
        }
      );
      this.submit = false;
    }else{
      this.loading.next(false);
    }
  }

  customValidator(): ValidatorFn {
    return (form: AbstractControl) => {
      const surname = form.get('surname')?.value;
      const dni = form.get('dni')?.value;
      if (!surname && !dni) {
        return { requiredFields: true };
      }
      return null;
    };
  }

  private isPersonalFieldsFilled(): boolean {
    const { name, surname, type } = this.form.value;
    return !!name || !!surname || !!type;
  }

  private isDniFieldFilled(): boolean {
    return !!this.form.value.dni;
  }
}

@Component({
  selector: 'dni-alert',
  templateUrl: 'dni-alert.components.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DniAlertComponent {
  readonly dialogRef = inject(MatDialogRef<DniAlertComponent>);
}
