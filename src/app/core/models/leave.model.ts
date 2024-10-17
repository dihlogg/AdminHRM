export interface Leave {
    id?: string | null;
    employeeName: string;
    subName: string | null;
    fromDate: Date;
    toDate: Date;
    comment: string | null;
    leaveStatus: string;
    leaveType: string;
    employeeId?: string | null;
}