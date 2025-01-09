import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StaffService} from '../../../services/staff.service';
import {BehaviorSubject} from 'rxjs';
import EnrichedStaff from '../../../models/enrichedStaff';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {StaffComponent} from '../staff/staff.component';
import {Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {MatBadge} from '@angular/material/badge';
import {ExamComponent} from '../exam/exam.component';
import {JobBankComponent} from '../job-bank/job-bank.component';
import {SpecificJobBankComponent} from '../specific-job-bank/specific-job-bank.component';

@Component({
  selector: 'app-staff-page',
  standalone: true,
  imports: [
    AsyncPipe,
    MatProgressSpinner,
    StaffComponent,
    MatIcon,
    MatIconButton,
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatBadge,
    ExamComponent,
    JobBankComponent,
    SpecificJobBankComponent
  ],
  templateUrl: './staff-page.component.html',
  styleUrl: './staff-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class StaffPageComponent implements OnInit{

  staff$ = new BehaviorSubject<EnrichedStaff | null>(null);
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.staffService.getStaff$(params['id']).subscribe({
        next: staff => {
          this.staff$.next(staff);
          this.loading$.next(false);
          console.log(staff)
        },
        error: e => {
          console.error(e);
          this.loading$.next(false);
        }
      });
    });
  }

  onBackClick() {
    this.router.navigate(['/'])
  }
}
