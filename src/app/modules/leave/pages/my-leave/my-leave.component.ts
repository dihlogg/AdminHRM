import { Component, OnInit } from '@angular/core';
import { LeaveNavbarComponent } from "../leave-navbar/leave-navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { Employee, Supervisor } from 'src/app/core/models/employee.model';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubUnit } from 'src/app/core/models/subUnit.model';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { MyLeave, RequestStatus, RequestType } from 'src/app/core/models/leave.model';
import { LeaveApiServiceService } from 'src/app/core/services/leave/leave-api-service.service';


@Component({
  selector: 'app-my-leave',
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
    RouterLink,
    InputTextModule,
    HttpClientModule
  ],
  providers: [MessageService, LeaveApiServiceService],
  templateUrl: './my-leave.component.html',
  styleUrl: './my-leave.component.scss'
})
export class MyLeaveComponent implements OnInit {
  requestType: RequestType[] = [];
  requestStatus: RequestStatus[] = [];
  myRequest: MyLeave | null = null;

  constructor(
    private leaveService : LeaveApiServiceService,
  ) {}

  ngOnInit(): void {
    this.loadMyRequest();
    this.loadRequestType();
    this.loadRequestStatus();
  }

  loadMyRequest(): void {
    this.leaveService.GetMyRequest().subscribe(
      (data: MyLeave) => {
        this.myRequest = data;
        console.log('My Request:', this.myRequest);
      },
      (error) => {
        console.error('Error fetching my request', error);
      }
    );
  }
  

  loadRequestType() : void {
    this.leaveService.getRequestTypes().subscribe (
      (types: RequestType[]) => {
        this.requestType = types;
        console.log('Request Type:', this.requestType);
      },
      (error) => {
        console.log('Error request type', error);
      }
    )
  }

  loadRequestStatus() : void {
    this.leaveService.getRequestStatus().subscribe (
      (statuses: RequestStatus[]) => {
        this.requestStatus = statuses;
        console.log('Request Status:', this.requestStatus);
      },
      (error) => {
        console.log('Error request status', error)
      }
    )
  }
}
