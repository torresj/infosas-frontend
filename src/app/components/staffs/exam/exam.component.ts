import {Component, Input, ViewEncapsulation} from '@angular/core';
import StaffExam from '../../../models/staffExam';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {SasType} from "../../../models/SasType";

@Component({
  selector: 'exam',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ExamComponent {
  @Input() exam!: StaffExam

  getTitle(): string{
    switch (this.exam.type){
      case SasType.NURSE_EXAM: return 'Enfermería';
      case SasType.TCAE_EXAM: return 'TCAE';
      default: return "";
    }
  }

  getSubTitle(): string{
    return this.exam.provisional
        ? 'Listado provisional ' + this.exam.examYear
        : 'Listado definitivo ' + this.exam.examYear;
  }
}
