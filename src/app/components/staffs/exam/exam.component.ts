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
      case StaffExamType.NURSE: return 'Enfermería';
      case StaffExamType.TCAE: return 'TCAE';
    }
  }

  getSubTitle(): string{
    return this.exam.provisional ? 'Listado provisional' : 'Listado definitivo'
  }
}
