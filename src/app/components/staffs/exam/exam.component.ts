import {Component, Input, ViewEncapsulation} from '@angular/core';
import StaffExam from '../../../models/staffExam';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {StaffExamType} from '../../../models/staffExamType';

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
      case StaffExamType.NURSE: return this.exam.provisional ? "Enfemería: Lista provisional" : "Enfermería: Lista definitiva";
      case StaffExamType.TCAE: return this.exam.provisional ? "TCAE: Lista provisional" : "TCAE: Lista definitiva";
    }
  }
}
