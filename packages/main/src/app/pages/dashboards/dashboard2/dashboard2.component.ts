import { Component } from '@angular/core';
import { DataTableComponent } from 'src/app/components/datatable/kichen-sink/kichen-sink.component';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  standalone: true,
  imports: [DataTableComponent],
})
export class AppDashboard2Component {
  constructor() {}
}
