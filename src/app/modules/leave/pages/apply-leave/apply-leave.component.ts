import { LeaveNavbarComponent } from "../leave-navbar/leave-navbar.component";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { Employee, Supervisor } from 'src/app/core/models/employee.model';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';
import { HttpClient } from '@angular/common/http';
import { SubUnit } from 'src/app/core/models/subUnit.model';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { LeaveApiServiceService } from "src/app/core/services/leave/leave-api-service.service";
import { Leave } from "src/app/core/models/leave.model";
import 'flowbite';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [LeaveNavbarComponent, 
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
    RouterLink],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss',
  providers: [MessageService, LeaveApiServiceService]
})
export class ApplyLeaveComponent implements OnInit {
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
  constructor(
    private leaveService: LeaveApiServiceService, 
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {}

  openFromDatePicker() {
    const fromDateInput = document.getElementById('fromDate') as HTMLInputElement;
    fromDateInput?.focus();
  }

  openToDatePicker() {
    const toDateInput = document.getElementById('toDate') as HTMLInputElement;
    toDateInput?.focus();
  }

  createNewLeave() {
    this.leaveService.postLeave(this.leaveInfo).subscribe(response => {
      console.log('Create new leave successfully', response);
    }, error => {
      console.log('Create new leave error', error);
    });
  }

  addNewLeave(leaveDate: any) {
    this.leaveService.postLeave(leaveDate).subscribe(
      (response) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Create new leave successfully!!'});
        setTimeout(() => {
          this.router.navigate(['/leave/list-leave']);
        }, 1000);
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Failed to add leave!!'});
      }
    );
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Action completed!'});
  }

}
