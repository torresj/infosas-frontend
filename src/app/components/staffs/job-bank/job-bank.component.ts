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
      case StaffJobBankType.TCAE: return "Bolsa de técnico/a en cuidados auxiliares de enfermería";
      case StaffJobBankType.NURSE_FAMILY: return "Bolsa especialista en enfermería familiar y comunitaria";
      case StaffJobBankType.NURSE_GYNECOLOGY: return "Bolsa especialista en enfermería obstétrico-ginecológica (matrón/a)"
      case StaffJobBankType.NURSE_MENTAL_HEALTH: return "Bolsa especialista en enfermería de salud mental";
      case StaffJobBankType.NURSE_PEDIATRICIAN: return "Bolsa especialista en enfermería pediátrica ";
      case StaffJobBankType.NURSE_WORK: return "Bolsa especialista en enfermería del trabajo";
      case StaffJobBankType.FISIO: return "Bolsa de fisioterapia";
      case StaffJobBankType.OCCUPATIONAL_THERAPY: return "Bolsa de terapia ocupacional";
      case StaffJobBankType.SPEECH_THERAPIST: return "Bolsa de logopedia";
      case StaffJobBankType.TEAP: return "Bolsa de técnico/a especialista en anatomía patológica";
      case StaffJobBankType.TEDN: return "Bolsa de técnico/a especialista en dietética y nutrición";
      case StaffJobBankType.TEDS: return "Bolsa de técnico/a especialista en documentación sanitaria";
      case StaffJobBankType.TEL: return "Bolsa de técnico/a especialista en laboratorio";
      case StaffJobBankType.TEMN: return "Bolsa de técnico/a especialista en medicina nuclear";
      case StaffJobBankType.TER: return "Bolsa de técnico/a especialista en radioterapia";
      case StaffJobBankType.TERD: return "Bolsa de técnico/a especialista en radiodiagnóstico";
      case StaffJobBankType.TF: return "Bolsa de técnico/a especialista en farmacia";
    }
  }

  getSubTitle(): string{
    return this.jobBank.provisional ? 'Listado provisional' : 'Listado definitivo'
  }
}
