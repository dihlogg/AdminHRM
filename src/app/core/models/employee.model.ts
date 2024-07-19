export interface Employee {
    id?: string | null;
    firstName: string;
    lastName: string;
    jobTitle: string;
    status: string;
    employeeId: string | null;
    subUnitId: string | null;
    subUnitName?: string;
    supervisor?: Supervisor;
    employeeChildren?: EmployeeChildren[];
}

export interface Supervisor {
    id?: string | null;
    fullName: string;
}

export interface EmployeeChildren {
    id?: string | null;
    fullName: string;
}