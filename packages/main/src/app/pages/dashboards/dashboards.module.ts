import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppDashboard1Component } from './dashboard1/dashboard1.component';
import { AppDashboard2Component } from './dashboard2/dashboard2.component';
import { AgencyComponent } from './agency/agency.component';

@NgModule({
  imports: [AppDashboard1Component, AppDashboard2Component, AgencyComponent],
})
export class DashboardsModule {}
