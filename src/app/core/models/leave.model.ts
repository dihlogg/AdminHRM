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
    items: {  // Cập nhật để phù hợp với cấu trúc API trả về
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