import {Component, Input} from '@angular/core';
import Staff from '../../../models/staff';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {StaffType} from '../../../models/staffType';

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
      case StaffType.TCAE: return "TCAE";
      case StaffType.OCCUPATIONAL_THERAPY: return "Terapeuta ocupacional";
      case StaffType.NURSE: return "Enfermero/a";
      case StaffType.SPEECH_THERAPIST: return "Logopeda";
    }
  }
}
