export interface Leave {
    id?: string | null;
    employeeName: string;
    subName: string | null;
    fromDate: Date;
    toDate: Date;
    leaveStatus: string;
    leaveType: string;
    employeeId?: string | null;
}