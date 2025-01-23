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
import { Leave, RequestApprovers, RequestInformTo, RequestPartial, RequestReason, RequestStatus, RequestSuppervisors, RequestTimeAndBalance, RequestType } from "src/app/core/models/leave.model";
import { HttpClientModule } from "@angular/common/http";
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { TimeOffPopupComponent } from "../time-off-popup/time-off-popup.component";

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
    RouterLink,
    HttpClientModule,
    DialogModule,
    TooltipModule,
    TimeOffPopupComponent],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss',
  providers: [MessageService, LeaveApiServiceService]
})
export class ApplyLeaveComponent implements OnInit {
  requestType: RequestType[] = [];
  requestStatus: RequestStatus[] = [];
  requestPartial: RequestPartial[] = [];
  requestReason: RequestReason[] = [];
  requestApprover: RequestApprovers[] = [];
  requestSuppervisor: RequestSuppervisors[] = [];
  requestInformTo: RequestInformTo[] = [];
  requestBalances: RequestTimeAndBalance[] = [];
  @Input() displayPopup!: boolean;

  constructor(
    private leaveService: LeaveApiServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadRequestType();
    this.loadRequestStatus();
    this.loadRequestReason();
    this.loadRequestPartials();
    this.loadApprover();
    this.loadInformTo();
    this.loadSuppervisor();
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

  loadRequestPartials(): void {
    this.leaveService.getRequestPartials().subscribe(
      (partials: RequestPartial[]) => {
        this.requestPartial = partials;
        console.log('Request Partial:', this.requestPartial);
      },
      (error) => {
        console.log('Error request partial', error)
      }
    )
  }

  loadRequestReason(): void {
    this.leaveService.getRequestReasons().subscribe(
      (reasons: RequestReason[]) => {
        this.requestReason = reasons;
        console.log('Request Reason:', this.requestReason);
      },
      (error) => {
        console.log('Error request reason', error)
      }
    )
  }

  loadApprover(): void {
    this.leaveService.getRequestApprovers().subscribe(
      (approvers: RequestApprovers[]) => {
        this.requestApprover = approvers;
        console.log('Request Approver:', this.requestApprover);
      },
      (error) => {
        console.log('Error request approver', error)
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

  loadInformTo(): void {
    this.leaveService.getRequestInformTo().subscribe(
      (informTo: RequestInformTo[]) => {
        this.requestInformTo = informTo;
        console.log('Request Inform To:', this.requestInformTo);
      },
      (error) => {
        console.log('Error request inform to', error)
      }
    )
  }

  showPopup(): void {
    this.displayPopup = true; // Mở popup
    console.log('Popup state:', this.displayPopup);
  }
  loadRequestBalances(): void {
    this.leaveService.getRequestTimeAndBalanace().subscribe(
      (balances: RequestTimeAndBalance[]) => {
        this.requestBalances = balances;
        console.log('Request Status:', this.requestBalances);
      },
      (error) => {
        console.log('Error request status', error)
      }
    )
  }
}
