import {Component, Input, signal, ViewEncapsulation} from '@angular/core';
import StaffSpecificJobBank from '../../../models/staffSpecificJobBank';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {Status} from '../../../models/status';
import {SasType} from "../../../models/SasType";

@Component({
  selector: 'specific-job-bank',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatExpansionModule
  ],
  templateUrl: './specific-job-bank.component.html',
  styleUrl: './specific-job-bank.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SpecificJobBankComponent {
  @Input() jobBank!: StaffSpecificJobBank
  readonly panelOpenState = signal(false);

  getTitle(): string{
    switch (this.jobBank.type){
      case SasType.NURSE_CRITICS_SPECIFIC_JOB_BANK: return "Bolsa área de cuidados críticos ";
      case SasType.NURSE_DIALYSIS_SPECIFIC_JOB_BANK: return "Bolsa área de diálisis";
      case SasType.NURSE_NEONATES_SPECIFIC_JOB_BANK: return "Bolsa área de Nenonatología";
      case SasType.NURSE_NUCLEAR_SPECIFIC_JOB_BANK: return "Bolsa área de medicina nuclear";
      case SasType.NURSE_MENTAL_HEALTH_SPECIFIC_JOB_BANK: return "Bolsa área de salud mental";
      case SasType.NURSE_SURGERY_ROOM_SPECIFIC_JOB_BANK: return "Bolsa área de quirófano";
      default: return "";
    }
  }

  getSubTitle(): string{
    return this.jobBank.provisional
        ? 'Listado provisional ' + this.jobBank.cutOffYear
        : 'Listado definitivo ' + this.jobBank.cutOffYear;
  }

  protected readonly Status = Status;
}
