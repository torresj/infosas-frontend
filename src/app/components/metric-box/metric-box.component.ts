import {Component, Input} from '@angular/core';

@Component({
  selector: 'metric-box',
  standalone: true,
  imports: [],
  templateUrl: './metric-box.component.html',
  styleUrl: './metric-box.component.css'
})
export class MetricBoxComponent {
    @Input() value: number | undefined = 0;
    @Input() label: string = '';
}
