import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatSelectModule} from '@angular/material/select'
import {BehaviorSubject} from 'rxjs';
import {StaffService} from '../../services/staff.service';
import Staff from '../../models/staff';
import {StaffComponent} from '../staffs/staff/staff.component';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogActions,
    MatDialogContent,
    MatDialogRef,
    MatDialogTitle
} from '@angular/material/dialog';
import {MetricsService} from "../../services/metrics.service";
import Metrics from "../../models/metrics";
import {MetricBoxComponent} from "../metric-box/metric-box.component";
import {StateService} from "../../services/state.service";
import SearchData from "../../models/searcData";
import {StaffType} from "../../models/staffType";


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
        StaffComponent,
        MatButton,
        MatSelectModule,
        MetricBoxComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit{

  readonly dialog = inject(MatDialog);

  staffs = new BehaviorSubject<Staff[]>([]);
  metrics = new BehaviorSubject<Metrics | null>(null);
  loading = new BehaviorSubject<boolean>(false);
  submit = false;

  form: FormGroup;

  constructor(
    private staffService: StaffService,
    private metricsService: MetricsService,
    private stateService: StateService
  ) {
   this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      type: new FormControl(''),
      dni: new FormControl('')
    }, { validators: this.customValidator()});
  }

    ngOnInit(): void {
        this.metricsService.getMetrics$().subscribe(metrics => {
            this.metrics.next(metrics);
        })
        if(this.stateService.staffs.length != 0){
            this.form.patchValue({
                name: this.stateService.name,
                surname: this.stateService.surname,
                type: this.stateService.type,
                dni: this.stateService.dni
            });
            this.staffs.next(this.stateService.staffs);
        }
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
            this.dialog.open(SearchNotFoundAlertComponent, {
                data: {
                    name: name,
                    surname: surname,
                    type: type,
                    dni: dni
                }
            })
          } else{
              this.stateService.name = name;
              this.stateService.surname = surname;
              this.stateService.type = type;
              this.stateService.staffs = staffs;
              this.stateService.dni = dni;
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
  styleUrl: 'dni-alert.components.css',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DniAlertComponent {
  readonly dialogRef = inject(MatDialogRef<DniAlertComponent>);
}

@Component({
    selector: 'search-alert',
    templateUrl: 'search-not-found-alert.components.html',
    styleUrl: 'search-not-found-alert.components.css',
    standalone: true,
    imports: [MatButtonModule, MatDialogActions, MatDialogTitle, MatDialogContent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchNotFoundAlertComponent {
    readonly dialogRef = inject(MatDialogRef<SearchNotFoundAlertComponent>);
    readonly data = inject<SearchData>(MAT_DIALOG_DATA);

     staffTypeLabels: Record<StaffType, string> = {
        [StaffType.FISIO]: "Fisioterapeuta",
        [StaffType.TCAE]: "Técnico/a en Cuidados Auxiliares de Enfermería",
        [StaffType.OCCUPATIONAL_THERAPY]: "Terapeuta ocupacional",
        [StaffType.NURSE]: "Enfermero/a",
        [StaffType.SPEECH_THERAPIST]: "Logopeda",
        [StaffType.TEAP]: "Técnico/a Especialista en Anatomía Patológica",
        [StaffType.TEDN]: "Técnico/a Especialista Dietética y Nutrición",
        [StaffType.TEDS]: "Técnico/a Especialista en Documentación Sanitaria",
        [StaffType.TEL]: "Técnico/a Especialista en Laboratorio",
        [StaffType.TEMN]: "Técnico/a Especialista en Medicina Nuclear",
        [StaffType.TER]: "Técnico/a Especialista en Radioterapia",
        [StaffType.TERD]: "Técnico/a Especialista en Radiodiagnóstico",
        [StaffType.TF]: "Técnico/a en Farmacia",
        [StaffType.PODIATRIST]: "Podólogo/a",
        [StaffType.TSESPC]: "Téc. Salud Educación para la Salud y Participación Comunitaria",
        [StaffType.TSSA]: "Téc. Salud Sanidad Ambiental",
        [StaffType.TSPRLPA]: "Técnico/a Superior en Prevención de Riesgos Laborales-Ergonomía y Psicosociología Aplicada",
        [StaffType.TSPRLHI]: "Técnico/a Superior en Prevención de Riesgos Laborales-Higiene Industrial",
        [StaffType.TSPRLST]: "Técnico/a Superior en Prevención de Riesgos Laborales-Seguridad en el Trabajo",
        [StaffType.SOCIAL_WORKER]: "Trabajador/a Social",
        [StaffType.ADM]: "Administrativo/a",
        [StaffType.ADMINISTRATIVE_ASSISTANT]: "Auxiliar Administrativo/a",
        [StaffType.CC]: "Celador/a Conductor/a",
        [StaffType.CCUL]: "Celador/a-Conductor/a de Unidad Logística",
        [StaffType.CCCTS]: "Celador/a-Conductor/a C.T.S.",
        [StaffType.CCAA]: "Celador/a-Conductor/a de ambulancia asistencial tipo B y C",
        [StaffType.COOK]: "Cocinero/a",
        [StaffType.POC]: "Personal de Oficio Costurero/a",
        [StaffType.MONITOR]: "Monitor/a",
        [StaffType.POP]: "Personal de oficio Peluquero/a",
        [StaffType.TEI]: "Técnico/a Especialista en Informática",
        [StaffType.TSA]: "Técnico/a Superior en Alojamiento",
        [StaffType.PHONE]: "Telefonista",
        [StaffType.TEMEII]: "Técnico/a Especialista en Mantenimiento de Edificios e Instalaciones Industriales",
        [StaffType.TEMEITF]: "T. E. M. E. I para Área de Instalaciones Térmicas y de Fluidos",
        [StaffType.TEMEISEA]: "T. E. M. E. I. para Área de Sistemas Electrotécnicos y Automatizados",
        [StaffType.TMAC]: "Técnico/a de Mantenimiento Acabados de Construcción",
        [StaffType.TMMM]: "Técnico/a de Mantenimiento de Madera y Mueble",
        [StaffType.TMOA]: "Técnico/a de Mantenimiento Obras de Albañilería",
        [StaffType.TEE]: "Técnico/a Especialista en Electromedicina",
        [StaffType.TIPRL]: "Técnico/a Intermedio/a en Prevención de Riesgos Laborales",
        [StaffType.WARDEN]: "Celador/a",
        [StaffType.CLEANER]: "Limpiador/a",
        [StaffType.LAUNDRY_STAFF]: "Personal Lavandería - Planchado",
        [StaffType.LABOURER]: "Peón",
        [StaffType.HELPER]: "Pinche",
    };

    getStaffTypeLabel(staffType: string): string {
        return this.staffTypeLabels[staffType as StaffType] ?? staffType;
    }
}
