export interface Employee {
  stt: number;
  id: number;
  Name: string;
  Mobile: number;
  DataSource: string;
  Branch: string;
  Staff: string;
  StatusUser: boolean;
  Status: boolean;
  TimeCreate: Date;
  TimeUpdate: Date;
}

export const employees = [
  {
    stt: 1,
    id: 101,
    Name: 'Nguyễn Văn A',
    Mobile: 987654321,
    DataSource: 'Source A',
    Branch: 'Branch 1',
    Staff: 'Staff A',
    StatusUser: true,
    Status: true,
    TimeCreate: new Date(),
    TimeUpdate: new Date(),
  },
  {
    stt: 2,
    id: 102,
    Name: 'Trần Văn B',
    Mobile: 987654322,
    DataSource: 'Source B',
    Branch: 'Branch 2',
    Staff: 'Staff B',
    StatusUser: false,
    Status: false,
    TimeCreate: new Date(),
    TimeUpdate: new Date(),
  },
  {
    stt: 3,
    id: 103,
    Name: 'Lê Thị C',
    Mobile: 987654323,
    DataSource: 'Source C',
    Branch: 'Branch 3',
    Staff: 'Staff C',
    StatusUser: true,
    Status: true,
    TimeCreate: new Date(),
    TimeUpdate: new Date(),
  },
];
