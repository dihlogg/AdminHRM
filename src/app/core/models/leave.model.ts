export interface LeaveCard {
  type_id: string;
  type_name: string;
  total: number;
  icon: string;
  display_order: number;
}
export interface LeaveCardItems {
  total_count: number;
  page_index: number;
  page_size: number;
  items: {
    date: string;
    abnormal_type: string;
    request_type: string;
    request_status: string;
    partial_day: string;
  }[];
}
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
export interface MyLeave {
  total_count: number;
  page_index: number;
  page_size: number;
  items: {
    request_no: number
    request_type_name: string;
    time_from: string;
    time_to: string;
    time_request: string,
    duration: number;
    reason: string;
    approver: string;
    delegate_to: string;
    status: string;
  }[];
}
export interface RequestType {
  type_id: string;
  type_name: string;
  display_order: number;
}
export interface RequestStatus {
  status_id: string;
  status_name: string;
  display_order: number;
}