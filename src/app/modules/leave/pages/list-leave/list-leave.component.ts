import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubUnit } from 'src/app/core/models/subUnit.model';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LeaveNavbarComponent } from "../leave-navbar/leave-navbar.component";
import { Leave } from 'src/app/core/models/leave.model';
import { LeaveApiServiceService } from 'src/app/core/services/leave/leave-api-service.service';

@Component({
  selector: 'app-list-leave',
  templateUrl: './list-leave.component.html',
  styleUrls: ['./list-leave.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    MenuModule,
    TableModule,
    ButtonModule,
    StyleClassModule,
    PanelMenuModule,
    ToggleButtonModule,
    PaginatorModule,
    RouterLink,
    InputTextModule,
    ToastModule,
    LeaveNavbarComponent,
    HttpClientModule
  ],
  providers: [MessageService, LeaveApiServiceService]
})
export class ListLeaveComponent implements OnInit {
  leaveInfo: Leave = {
    employeeName: '',
    leaveStatus: '',
    leaveType: '',
    fromDate: new Date(),
    toDate: new Date(),
    employeeId: null,
    subName: '',
    comment: ''
  };

  dropdownStates: boolean[] = [];
  leaves: Leave[] = [];
  selectedEmployeeId: any;
  subUnits: SubUnit[] = [];
  first: number = 0;
  row: number = 5;
  totalRecords: number = 0;
  employeeName = '';
  subName = '';
  leaveStatus = '';
  leaveType = '';
  fromDate?: Date;
  toDate?: Date;
  totalCount: number = 0;
  pageIndex: number = 0;
  pageSize: number = 100;
  isModalOpen = false;

  constructor(
    private leaveService: LeaveApiServiceService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.refreshData();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      // Close all dropdowns if clicking outside of the dropdown
      this.dropdownStates.fill(false);
    }
  }

  closeDropdown(index: number): void {
    this.dropdownStates[index] = false;
  }

  toggleDropdown(index: number): void {
    this.dropdownStates[index] = !this.dropdownStates[index];
  }

  refreshData() {
    this.leaveService.getLeaves().subscribe(
      (data) => {
        this.leaves = data;
        console.log('Fetched leaves:', this.leaves);
      },
      (error) => {
        console.error('Error fetching leaves:', error);
      }
    );
  }
  navigateToApplyLeave() {
    this.router.navigate(['/leave/apply-leave']);
  }
  openModal(leave: Leave, index: number) {
    this.leaveInfo = { ...leave }; // Sao chép dữ liệu leave
    this.isModalOpen = true;
  
    // Đóng dropdown khi mở modal
    this.closeDropdown(index);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitComment() {
    this.updateLeaveData();
    this.closeModal();
  }
  
  updateLeaveData() {
    // Chỉ cần truyền vào trường comment
    const updatedLeave = {
      ...this.leaveInfo,
      comment: this.leaveInfo.comment // Chỉ cập nhật trường comment
    };
  
    this.leaveService.putLeave(updatedLeave).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Comment updated successfully!' });
        this.refreshData(); // Tải lại dữ liệu sau khi cập nhật
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update Comment!' });
      }
    );
  }

  filteredLeaves(fromDate?: Date, toDate?: Date, leaveType?: string, leaveStatus?: string, employeeName?: string, subName?: string) {
    if (!fromDate && !toDate && !leaveType && !leaveStatus && !employeeName && !subName) {
      this.refreshData();
    } else {
      this.leaveService.searchLeaves(fromDate, toDate, leaveType, leaveStatus, employeeName, subName).subscribe(data => {
        this.leaves = data;
      });
    }
  }
  onDateChange() {
    this.filteredLeaves(this.fromDate, this.toDate, this.leaveType, this.leaveStatus, this.employeeName, this.subName);
  }
}
