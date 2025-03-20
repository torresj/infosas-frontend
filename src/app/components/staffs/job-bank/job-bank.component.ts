import {Component, Input, signal, ViewEncapsulation} from '@angular/core';
import StaffJobBank from '../../../models/staffJobBank';
import {StaffJobBankType} from '../../../models/staffJobBankType';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {Status} from '../../../models/status';

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
      case StaffJobBankType.NURSE: return "Bolsa de enfermería";
      case StaffJobBankType.TCAE: return "Bolsa de TCAE";
      case StaffJobBankType.NURSE_FAMILY: return "Bolsa especialista en enfermería familiar y comunitaria";
      case StaffJobBankType.NURSE_GYNECOLOGY: return "Bolsa especialista en enfermería obstétrico-ginecológica (matrón/a)"
      case StaffJobBankType.NURSE_MENTAL_HEALTH: return "Bolsa especialista en enfermería de salud mental";
      case StaffJobBankType.NURSE_PEDIATRICIAN: return "Bolsa especialista en enfermería pediátrica ";
      case StaffJobBankType.NURSE_WORK: return "Bolsa especialista en enfermería del trabajo";
      case StaffJobBankType.FISIO: return "Bolsa de fisioterapia";
      case StaffJobBankType.OCCUPATIONAL_THERAPY: return "Bolsa de terapia ocupacional";
      case StaffJobBankType.SPEECH_THERAPIST: return "Bolsa de logopedia";
    }
  }

  getSubTitle(): string{
    return this.jobBank.provisional ? 'Listado provisional' : 'Listado definitivo'
  }
}
