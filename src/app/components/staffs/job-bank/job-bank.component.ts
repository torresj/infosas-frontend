import {Component, Input, signal, ViewEncapsulation} from '@angular/core';
import StaffJobBank from '../../../models/staffJobBank';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {Status} from '../../../models/status';
import {SasType} from "../../../models/SasType";

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
      case SasType.NURSE_JOB_BANK: return "Bolsa de enfermería";
      case SasType.TCAE_JOB_BANK: return "Bolsa de técnico/a en cuidados auxiliares de enfermería";
      case SasType.NURSE_FAMILY_JOB_BANK: return "Bolsa especialista en enfermería familiar y comunitaria";
      case SasType.NURSE_GYNECOLOGY_JOB_BANK: return "Bolsa especialista en enfermería obstétrico-ginecológica (matrón/a)"
      case SasType.NURSE_MENTAL_HEALTH_JOB_BANK: return "Bolsa especialista en enfermería de salud mental";
      case SasType.NURSE_PEDIATRICIAN_JOB_BANK: return "Bolsa especialista en enfermería pediátrica ";
      case SasType.NURSE_WORK_JOB_BANK: return "Bolsa especialista en enfermería del trabajo";
      case SasType.FISIO_JOB_BANK: return "Bolsa de fisioterapia";
      case SasType.OCCUPATIONAL_THERAPY_JOB_BANK: return "Bolsa de terapia ocupacional";
      case SasType.SPEECH_THERAPIST_JOB_BANK: return "Bolsa de logopedia";
      case SasType.TEAP_JOB_BANK: return "Bolsa de técnico/a especialista en anatomía patológica";
      case SasType.TEDN_JOB_BANK: return "Bolsa de técnico/a especialista en dietética y nutrición";
      case SasType.TEDS_JOB_BANK: return "Bolsa de técnico/a especialista en documentación sanitaria";
      case SasType.TEL_JOB_BANK: return "Bolsa de técnico/a especialista en laboratorio";
      case SasType.TEMN_JOB_BANK: return "Bolsa de técnico/a especialista en medicina nuclear";
      case SasType.TER_JOB_BANK: return "Bolsa de técnico/a especialista en radioterapia";
      case SasType.TERD_JOB_BANK: return "Bolsa de técnico/a especialista en radiodiagnóstico";
      case SasType.TF_JOB_BANK: return "Bolsa de técnico/a especialista en farmacia";
        case SasType.PODIATRIST_JOB_BANK: return "Bolsa de Podólogo/a";
        case SasType.TSESPC_JOB_BANK: return  "Bolsa de Téc. Salud Educación para la Salud y Participación Comunitaria";
        case SasType.TSSA_JOB_BANK: return "Bolsa de Téc. Salud Sanidad Ambiental";
        case SasType.TSPRLPA_JOB_BANK: return "Bolsa de Técnico/a Superior en Prevención de Riesgos Laborales-Ergonomía y Psicosociología Aplicada";
        case SasType.TSPRLHI_JOB_BANK: return "Bolsa de Técnico/a Superior en Prevención de Riesgos Laborales-Higiene Industrial";
        case SasType.TSPRLST_JOB_BANK: return "Bolsa de Técnico/a Superior en Prevención de Riesgos Laborales-Seguridad en el Trabajo";
        case SasType.SOCIAL_WORKER_JOB_BANK: return "Bolsa de Trabajador/a Social";
        case SasType.ADM_JOB_BANK: return "Bolsa de Administrativo/a";
        case SasType.ADMINISTRATIVE_ASSISTANT_JOB_BANK: return "Bolsa de Auxiliar Administrativo/a";
        case SasType.CC_JOB_BANK: return "Bolsa de Celador/a Conductor/a";
        case SasType.CCUL_JOB_BANK: return "Bolsa de Celador/a-Conductor/a de Unidad Logística";
        case SasType.CCCTS_JOB_BANK: return "Bolsa de Celador/a-Conductor/a C.T.S.";
        case SasType.CCAA_JOB_BANK: return "Bolsa de Celador/a-Conductor/a de ambulancia asistencial tipo B y C";
        case SasType.COOK_JOB_BANK: return "Bolsa de Cocinero/a";
        case SasType.POC_JOB_BANK: return "Bolsa de Personal de Oficio Costurero/a";
        case SasType.MONITOR_JOB_BANK: return "Bolsa de Monitor/a";
        case SasType.POP_JOB_BANK: return "Bolsa de Personal de oficio Peluquero/a";
        case SasType.TEI_JOB_BANK: return "Bolsa de Técnico/a Especialista en Informática";
        case SasType.TSA_JOB_BANK: return "Bolsa de Técnico/a Superior en Alojamiento";
        case SasType.PHONE_JOB_BANK: return "Bolsa de Telefonista";
        case SasType.TEMEII_JOB_BANK: return "Bolsa de Técnico/a Especialista en Mantenimiento de Edificios e Instalaciones Industriales";
        case SasType.TEMEITF_JOB_BANK: return "Bolsa de T. E. M. E. I para Área de Instalaciones Térmicas y de Fluidos";
        case SasType.TEMEISEA_JOB_BANK: return "Bolsa de T. E. M. E. I. para Área de Sistemas Electrotécnicos y Automatizados";
        case SasType.TMAC_JOB_BANK: return "Bolsa de Técnico/a de Mantenimiento Acabados de Construcción";
        case SasType.TMMM_JOB_BANK: return "Bolsa de Técnico/a de Mantenimiento de Madera y Mueble";
        case SasType.TMOA_JOB_BANK: return "Bolsa de Técnico/a de Mantenimiento Obras de Albañilería";
        case SasType.TEE_JOB_BANK: return "Bolsa de Técnico/a Especialista en Electromedicina";
        case SasType.TIPRL_JOB_BANK: return "Bolsa de Técnico/a Intermedio/a en Prevención de Riesgos Laborales";
        case SasType.WARDEN_JOB_BANK: return "Bolsa de Celador/a";
        case SasType.CLEANER_JOB_BANK: return "Bolsa de Limpiador/a";
        case SasType.LAUNDRY_STAFF_JOB_BANK: return "Bolsa de Personal Lavandería - Planchado";
        case SasType.LABOURER_JOB_BANK: return "Bolsa de Peón";
        case SasType.HELPER_JOB_BANK: return "Bolsa de Pinche";
      default: return "";
    }
  }

  getSubTitle(): string{
    return this.jobBank.provisional
        ? 'Listado provisional ' + this.jobBank.cutOffYear
        : 'Listado definitivo ' + this.jobBank.cutOffYear;
  }
}
