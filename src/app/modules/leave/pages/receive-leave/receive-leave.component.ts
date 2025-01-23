import { LeaveNavbarComponent } from "../leave-navbar/leave-navbar.component";
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { LeaveApiServiceService } from "src/app/core/services/leave/leave-api-service.service";
import { Leave, ReceiveRequest, RequestApprovers, Requester, RequestInformTo, RequestPartial, RequestReason, RequestStatus, RequestSuppervisors, RequestTimeAndBalance, RequestType } from "src/app/core/models/leave.model";
import { HttpClientModule } from "@angular/common/http";
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { TimeOffPopupComponent } from "../time-off-popup/time-off-popup.component";


@Component({
  selector: 'app-receive-leave',
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
    HttpClientModule,
    DialogModule,
    TooltipModule,
    TimeOffPopupComponent],
  templateUrl: './receive-leave.component.html',
  styleUrl: './receive-leave.component.scss',
  providers: [MessageService, LeaveApiServiceService]
})
export class ReceiveLeaveComponent implements OnInit {
  getRequester: Requester[] = [];
  receiveRequest: ReceiveRequest | null = null;
  requestType: RequestType[] = [];
  requestStatus: RequestStatus[] = [];
  requestSuppervisor: RequestSuppervisors[] = [];

  constructor(
    private leaveService: LeaveApiServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadRequester();
    this.loadReceiveRequest();
    this.loadRequestStatus();
    this.loadRequestType();
  }
  loadRequester(): void {
    this.leaveService.getRequester().subscribe(
      (requester: Requester[]) => {
        this.getRequester = requester;
        console.log('Requester:', this.getRequester);
      },
      (error) => {
        console.log('Error requester', error)
      }
    )
  }
  loadReceiveRequest(): void {
    this.leaveService.getReceiveRequests().subscribe(
      (data: ReceiveRequest) => {
        this.receiveRequest = data;
        console.log('Receive Request:', this.receiveRequest);
      },
      (error) => {
        console.log('Error fetching receive request', error);
      }
    )
  }
  loadRequestType(): void {
    this.leaveService.getRequestTypes().subscribe(
      (types: RequestType[]) => {
        this.requestType = types;
        console.log('Request Type:', this.requestType);
      },
      (error) => {
        console.log('Error request type', error);
      }
    )
  }

  loadRequestStatus(): void {
    this.leaveService.getRequestStatus().subscribe(
      (statuses: RequestStatus[]) => {
        this.requestStatus = statuses;
        console.log('Request Status:', this.requestStatus);
      },
      (error) => {
        console.log('Error request status', error)
      }
    )
  }

  loadSuppervisor(): void {
    this.leaveService.getRequestSuppervisors().subscribe(
      (suppervisors: RequestSuppervisors[]) => {
        this.requestSuppervisor = suppervisors;
        console.log('Request Suppervisor:', this.requestSuppervisor);
      },
      (error) => {
        console.log('Error request suppervisor', error)
      }
    )
  }
}
