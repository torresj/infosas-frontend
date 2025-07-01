import {Component, Input, signal, ViewEncapsulation} from '@angular/core';
import StaffSpecificJobBank from '../../../models/staffSpecificJobBank';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {StaffSpecificJobBankType} from '../../../models/staffSpecificJobBankType';
import {Status} from '../../../models/status';

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
      case StaffSpecificJobBankType.NURSE_CRITICS: return "Bolsa área de cuidados críticos ";
      case StaffSpecificJobBankType.NURSE_DIALYSIS: return "Bolsa área de diálisis";
      case StaffSpecificJobBankType.NURSE_NEONATES: return "Bolsa área de Nenonatología";
      case StaffSpecificJobBankType.NURSE_NUCLEAR: return "Bolsa área de medicina nuclear";
      case StaffSpecificJobBankType.NURSE_MENTAL_HEALTH: return "Bolsa área de salud mental";
      case StaffSpecificJobBankType.NURSE_SURGERY_ROOM: return "Bolsa área de quirófano";
    }
  }

  getSubTitle(): string{
    return this.jobBank.provisional
        ? 'Listado provisional ' + this.jobBank.cutOffYear
        : 'Listado definitivo ' + this.jobBank.cutOffYear;
  }

  protected readonly Status = Status;
}
