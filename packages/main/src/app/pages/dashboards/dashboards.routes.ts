import { Routes } from '@angular/router';

// dashboards
import { AppDashboard1Component } from './dashboard1/dashboard1.component';
import { AppDashboard2Component } from './dashboard2/dashboard2.component';
import { UserDetailComponent } from './dashboard2/user-detail/user-detail.component';
import { AgencyComponent } from './agency/agency.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: AppDashboard1Component,
        data: {
          title: 'Analytical',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Analytical' },
          ],
        },
      },
      {
        path: 'agency',
        component: AgencyComponent,
        data: {
          title: 'Agency',
          urls: [
            { title: 'Agency', url: '/dashboards/Agency' },
            { title: 'Agency' },
          ],
        },
      },
      {
        path: 'dashboard2',
        component: AppDashboard2Component,
        data: {
          title: 'KHÁCH HÀNG',
          urls: [
            { title: 'KHÁCH HÀNG', url: '/dashboards/dashboard1' },
            { title: 'KHÁCH HÀNG' },
          ],
        },
        children: [
          {
            path: ':userId',
            component: UserDetailComponent,
            data: {
              title: 'User Detail',
              urls: [
                {
                  title: 'Thông Tin Khách Hàng',
                  url: '/dashboards/dashboard2/:userId',
                },
                { title: 'User Detail' },
              ],
            },
          },
        ],
      },
    ],
  },
];
