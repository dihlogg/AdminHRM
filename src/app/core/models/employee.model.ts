export interface Employee {
    id?: string | null;
    firstName: string;
    lastName: string;
    jobTitle: string;
    status: string;
    employeeId: string | null;
    subUnitId: string | null;
    subUnitName?: string;
    supervisor?: superVisor;
    employeeChildrens?: employeeChildrens[];
}

export interface superVisor {
    id?: string | null;
    fullName: string;
}

export interface employeeChildrens {
    id?: string | null;
    fullName: string;
}