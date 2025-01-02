import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, DatePipe } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatNativeDateModule } from '@angular/material/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from 'src/app/material.module';
import { Data, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Employee, employees } from './EmployeeData';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  templateUrl: './kichen-sink.component.html',
  styleUrls: ['./kichen-sink.component.css'], // Sửa thành styleUrls
  selector: 'app-datatable',
  standalone: true,
  imports: [
    MaterialModule,
    TablerIconsModule,
    MatNativeDateModule,
    NgScrollbarModule,
    CommonModule,
  ],
  providers: [DatePipe],
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  pageInfo: Data | any = {};
  myurl: string[] = this.router.url.slice(1).split('/');

  searchText: string = '';
  hoveredRow: any = null;

  displayedColumns: string[] = [
    'stt',
    'id',
    'Name',
    'Mobile',
    'DataSource',
    'Branch',
    'Staff',
    'StatusUser',
    'Status',
    'TimeCreate',
    'TimeUpdate',
    'action',
  ];
  dataSource = new MatTableDataSource(employees);

  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activatedRoute.data.subscribe((event) => {
          if (this.router.url.includes('/dashboard2/')) {
            return;
          }
          this.pageInfo = event;
        });
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;

    if (action === 'Delete') {
      this.deleteRowData(obj);
    } else if (action === 'User') {
      this.navigateToUser(obj.id);
    }
  }

  navigateToUser(userId: number): void {
    this.router.navigate([`/dashboards/dashboard2/${userId}`]);
  }

  deleteRowData(row_obj: Employee): void {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      return value.id !== row_obj.id;
    });
  }

  add(): void {
    console.log(this.pageInfo);
  }
}
