import { Component } from '@angular/core';
import { DataTableComponent } from 'src/app/components/datatable/kichen-sink/kichen-sink.component';

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './agency.component.html',
  styleUrl: './agency.component.css',
})
export class AgencyComponent {}
