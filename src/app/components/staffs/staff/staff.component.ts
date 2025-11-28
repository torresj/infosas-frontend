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


    typeToLabel: Record<StaffType, string> = {
        [StaffType.FISIO]: "Fisioterapeuta",
        [StaffType.TCAE]: "Técnico/a en Cuidados Auxiliares de Enfermería",
        [StaffType.OCCUPATIONAL_THERAPY]: "Terapeuta ocupacional",
        [StaffType.NURSE]: "Enfermero/a",
        [StaffType.SPEECH_THERAPIST]: "Logopeda",
        [StaffType.TEAP]: "Técnico/a Especialista en Anatomía Patológica",
        [StaffType.TEDN]: "Técnico/a Especialista Dietética y Nutrición",
        [StaffType.TEDS]: "Técnico/a Especialista en Documentación Sanitaria",
        [StaffType.TEL]: "Técnico/a Especialista en Laboratorio",
        [StaffType.TEMN]: "Técnico/a Especialista en Medicina Nuclear",
        [StaffType.TER]: "Técnico/a Especialista en Radioterapia",
        [StaffType.TERD]: "Técnico/a Especialista en Radiodiagnóstico",
        [StaffType.TF]: "Técnico/a en Farmacia",
        [StaffType.PODIATRIST]: "Podólogo/a",
        [StaffType.TSESPC]: "Téc. Salud Educación para la Salud y Participación Comunitaria",
        [StaffType.TSSA]: "Téc. Salud Sanidad Ambiental",
        [StaffType.TSPRLPA]: "Técnico/a Superior en Prevención de Riesgos Laborales-Ergonomía y Psicosociología Aplicada",
        [StaffType.TSPRLHI]: "Técnico/a Superior en Prevención de Riesgos Laborales-Higiene Industrial",
        [StaffType.TSPRLST]: "Técnico/a Superior en Prevención de Riesgos Laborales-Seguridad en el Trabajo",
        [StaffType.SOCIAL_WORKER]: "Trabajador/a Social",
        [StaffType.ADM]: "Administrativo/a",
        [StaffType.ADMINISTRATIVE_ASSISTANT]: "Auxiliar Administrativo/a",
        [StaffType.CC]: "Celador/a Conductor/a",
        [StaffType.CCUL]: "Celador/a-Conductor/a de Unidad Logística",
        [StaffType.CCCTS]: "Celador/a-Conductor/a C.T.S.",
        [StaffType.CCAA]: "Celador/a-Conductor/a de ambulancia asistencial tipo B y C",
        [StaffType.COOK]: "Cocinero/a",
        [StaffType.POC]: "Personal de Oficio Costurero/a",
        [StaffType.MONITOR]: "Monitor/a",
        [StaffType.POP]: "Personal de oficio Peluquero/a",
        [StaffType.TEI]: "Técnico/a Especialista en Informática",
        [StaffType.TSA]: "Técnico/a Superior en Alojamiento",
        [StaffType.PHONE]: "Telefonista",
        [StaffType.TEMEII]: "Técnico/a Especialista en Mantenimiento de Edificios e Instalaciones Industriales",
        [StaffType.TEMEITF]: "T. E. M. E. I para Área de Instalaciones Térmicas y de Fluidos",
        [StaffType.TEMEISEA]: "T. E. M. E. I. para Área de Sistemas Electrotécnicos y Automatizados",
        [StaffType.TMAC]: "Técnico/a de Mantenimiento Acabados de Construcción",
        [StaffType.TMMM]: "Técnico/a de Mantenimiento de Madera y Mueble",
        [StaffType.TMOA]: "Técnico/a de Mantenimiento Obras de Albañilería",
        [StaffType.TEE]: "Técnico/a Especialista en Electromedicina",
        [StaffType.TIPRL]: "Técnico/a Intermedio/a en Prevención de Riesgos Laborales",
        [StaffType.WARDEN]: "Celador/a",
        [StaffType.CLEANER]: "Limpiador/a",
        [StaffType.LAUNDRY_STAFF]: "Personal Lavandería - Planchado",
        [StaffType.LABOURER]: "Peón",
        [StaffType.HELPER]: "Pinche",
    };

  getStaffType(): string {
      return this.staff.types.map(type => this.typeToLabel[type]).join(', ')
  }

  hasDefinitiveList(exams: Array<StaffExam>): boolean {
      return exams.some(exam => !exam.provisional);
    }
}
