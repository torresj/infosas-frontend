import {Component, Input, signal, ViewEncapsulation} from '@angular/core';
import StaffJobBank from '../../../models/staffJobBank';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {Status} from '../../../models/status';
import {SasType} from "../../../models/SasType";

@Component({
  selector: 'job-bank',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatExpansionModule
  ],
  templateUrl: './job-bank.component.html',
  styleUrl: './job-bank.component.css',
  encapsulation: ViewEncapsulation.None
})
export class JobBankComponent {
  @Input() jobBank!: StaffJobBank
  readonly panelOpenState = signal(false);
  protected readonly Status = Status;

  getTitle(): string{
    switch (this.jobBank.type){
      case SasType.NURSE_JOB_BANK: return "Bolsa de enfermería";
      case SasType.TCAE_JOB_BANK: return "Bolsa de técnico/a en cuidados auxiliares de enfermería";
      case SasType.NURSE_FAMILY_JOB_BANK: return "Bolsa especialista en enfermería familiar y comunitaria";
      case SasType.NURSE_GYNECOLOGY_JOB_BANK: return "Bolsa especialista en enfermería obstétrico-ginecológica (matrón/a)"
      case SasType.NURSE_MENTAL_HEALTH_JOB_BANK: return "Bolsa especialista en enfermería de salud mental";
      case SasType.NURSE_PEDIATRICIAN_JOB_BANK: return "Bolsa especialista en enfermería pediátrica ";
      case SasType.NURSE_WORK_JOB_BANK: return "Bolsa especialista en enfermería del trabajo";
      case SasType.FISIO_JOB_BANK: return "Bolsa de fisioterapia";
      case SasType.OCCUPATIONAL_THERAPY_JOB_BANK: return "Bolsa de terapia ocupacional";
      case SasType.SPEECH_THERAPIST_JOB_BANK: return "Bolsa de logopedia";
      case SasType.TEAP_JOB_BANK: return "Bolsa de técnico/a especialista en anatomía patológica";
      case SasType.TEDN_JOB_BANK: return "Bolsa de técnico/a especialista en dietética y nutrición";
      case SasType.TEDS_JOB_BANK: return "Bolsa de técnico/a especialista en documentación sanitaria";
      case SasType.TEL_JOB_BANK: return "Bolsa de técnico/a especialista en laboratorio";
      case SasType.TEMN_JOB_BANK: return "Bolsa de técnico/a especialista en medicina nuclear";
      case SasType.TER_JOB_BANK: return "Bolsa de técnico/a especialista en radioterapia";
      case SasType.TERD_JOB_BANK: return "Bolsa de técnico/a especialista en radiodiagnóstico";
      case SasType.TF_JOB_BANK: return "Bolsa de técnico/a especialista en farmacia";
      default: return "";
    }
  }

  getSubTitle(): string{
    return this.jobBank.provisional
        ? 'Listado provisional ' + this.jobBank.cutOffYear
        : 'Listado definitivo ' + this.jobBank.cutOffYear;
  }
}
