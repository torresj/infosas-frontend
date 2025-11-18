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
        case StaffType.PODIATRIST: return "Podólogo/a";
        case StaffType.TSESPC: return  "Téc. Salud Educación para la Salud y Participación Comunitaria";
        case StaffType.TSSA: return "Téc. Salud Sanidad Ambiental";
        case StaffType.TSPRLPA: return "Técnico/a Superior en Prevención de Riesgos Laborales-Ergonomía y Psicosociología Aplicada";
        case StaffType.TSPRLHI: return "Técnico/a Superior en Prevención de Riesgos Laborales-Higiene Industrial";
        case StaffType.TSPRLST: return "Técnico/a Superior en Prevención de Riesgos Laborales-Seguridad en el Trabajo";
        case StaffType.SOCIAL_WORKER: return "Trabajador/a Social";
        case StaffType.ADM: return "Administrativo/a";
        case StaffType.ADMINISTRATIVE_ASSISTANT: return "Auxiliar Administrativo/a";
        case StaffType.CC: return "Celador/a Conductor/a";
        case StaffType.CCUL: return "Celador/a-Conductor/a de Unidad Logística";
        case StaffType.CCCTS: return "Celador/a-Conductor/a C.T.S.";
        case StaffType.CCAA: return "Celador/a-Conductor/a de ambulancia asistencial tipo B y C";
        case StaffType.COOK: return "Cocinero/a";
        case StaffType.POC: return "Personal de Oficio Costurero/a";
        case StaffType.MONITOR: return "Monitor/a";
        case StaffType.POP: return "Personal de oficio Peluquero/a";
        case StaffType.TEI: return "Técnico/a Especialista en Informática";
        case StaffType.TSA: return "Técnico/a Superior en Alojamiento";
        case StaffType.PHONE: return "Telefonista";
        case StaffType.TEMEII: return "Técnico/a Especialista en Mantenimiento de Edificios e Instalaciones Industriales";
        case StaffType.TEMEITF: return "T. E. M. E. I para Área de Instalaciones Térmicas y de Fluidos";
        case StaffType.TEMEISEA: return "T. E. M. E. I. para Área de Sistemas Electrotécnicos y Automatizados";
        case StaffType.TMAC: return "Técnico/a de Mantenimiento Acabados de Construcción";
        case StaffType.TMMM: return "Técnico/a de Mantenimiento de Madera y Mueble";
        case StaffType.TMOA: return "Técnico/a de Mantenimiento Obras de Albañilería";
        case StaffType.TEE: return "Técnico/a Especialista en Electromedicina";
        case StaffType.TIPRL: return "Técnico/a Intermedio/a en Prevención de Riesgos Laborales";
        case StaffType.WARDEN: return "Celador/a";
        case StaffType.CLEANER: return "Limpiador/a";
        case StaffType.LAUNDRY_STAFF: return "Personal Lavandería - Planchado";
        case StaffType.LABOURER: return "Peón";
        case StaffType.HELPER: return "Pinche";
    }
  }

  hasDefinitiveList(exams: Array<StaffExam>): boolean {
      return exams.some(exam => !exam.provisional);
    }
}
