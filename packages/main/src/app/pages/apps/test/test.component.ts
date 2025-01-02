import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

type Data = {
  Name: string;
  Age: number;
  Address: string;
  Email: string;
  Phone: string;
  Role: string[];
};

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatIconModule,
    CommonModule,
  ],
})
export class TestComponent {
  roles: string[] = ['Admin', 'User', 'Staff']; // Danh sách các role

  data: Data[] = [
    {
      Name: 'John Doe',
      Age: 30,
      Address: '123 Main St',
      Email: 'john@example.com',
      Phone: '123-456-7890',
      Role: [],
    },
    {
      Name: 'Jane Smith',
      Age: 25,
      Address: '456 Maple Ave',
      Email: 'jane@example.com',
      Phone: '987-654-3210',
      Role: [],
    },
    {
      Name: 'Alice Johnson',
      Age: 35,
      Address: '789 Oak Dr',
      Email: 'alice@example.com',
      Phone: '456-789-1234',
      Role: [],
    },
    {
      Name: 'Bob Brown',
      Age: 28,
      Address: '321 Pine Ln',
      Email: 'bob@example.com',
      Phone: '654-321-9876',
      Role: [],
    },
    {
      Name: 'Charlie White',
      Age: 40,
      Address: '987 Cedar Rd',
      Email: 'charlie@example.com',
      Phone: '321-654-0987',
      Role: [],
    },
  ];

  assignRole(event: CdkDragDrop<string[]>, userIndex: number) {
    const role = event.previousContainer.data[event.previousIndex];
    if (!this.data[userIndex].Role.includes(role)) {
      this.data[userIndex].Role.push(role);
    }
  }
  removeRole(userIndex: number, role: string) {
    const roleIndex = this.data[userIndex].Role.indexOf(role);
    if (roleIndex > -1) {
      this.data[userIndex].Role.splice(roleIndex, 1);
    }
  }
}
