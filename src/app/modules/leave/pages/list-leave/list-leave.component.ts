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
  LeaveType = '';
  totalCount: number = 0;
  pageIndex: number = 0;
  pageSize: number = 100;

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
}
