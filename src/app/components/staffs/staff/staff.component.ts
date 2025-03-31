import {Component, Input} from '@angular/core';
import Staff from '../../../models/staff';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {StaffType} from '../../../models/staffType';
import StaffExam from '../../../models/staffExam';

@Component({
  selector: 'staff',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  @Input() staff!: Staff

  getStaffType(): string {
    switch (this.staff.type){
      case StaffType.FISIO: return "Fisioterapeuta";
      case StaffType.TCAE: return "Técnico/a en Cuidados Auxiliares de Enfermería";
      case StaffType.OCCUPATIONAL_THERAPY: return "Terapeuta ocupacional";
      case StaffType.NURSE: return "Enfermero/a";
      case StaffType.SPEECH_THERAPIST: return "Logopeda";
      case StaffType.TEAP: return "Técnico/a Especialista en Anatomía Patológica";
      case StaffType.TEDN: return "Técnico/a Especialista Dietética y Nutrición";
      case StaffType.TEDS: return "Técnico/a Especialista en Documentación Sanitaria";
      case StaffType.TEL: return "Técnico/a Especialista en Laboratorio";
      case StaffType.TEMN: return "Técnico/a Especialista en Medicina Nuclear";
      case StaffType.TER: return "Técnico/a Especialista en Radioterapia";
      case StaffType.TERD: return "Técnico/a Especialista en Radiodiagnóstico";
      case StaffType.TF: return "Técnico/a en Farmacia";
    }
  }

  hasDefinitiveList(exams: Array<StaffExam>): boolean {
      return exams.some(exam => !exam.provisional);
    }
}
