import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { LeaveNavbarComponent } from "../leave-navbar/leave-navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { MyLeave, RequestStatus, RequestTimeAndBalance, RequestType } from 'src/app/core/models/leave.model';
import { LeaveApiServiceService } from 'src/app/core/services/leave/leave-api-service.service';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-time-off-popup',
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
    HttpClientModule,
    DialogModule,
    TooltipModule],
    providers: [MessageService, LeaveApiServiceService],
  templateUrl: './time-off-popup.component.html',
  styleUrl: './time-off-popup.component.scss'
})
export class TimeOffPopupComponent {
  @Input() requestBalances: RequestTimeAndBalance[] = [];
  @Input() displayPopup: boolean = false;


  constructor(
    private leaveService : LeaveApiServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRequestBalances();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['displayPopup'] && changes['displayPopup'].currentValue) {
      this.loadRequestBalances();
    }
  }

  loadRequestBalances() : void {
      this.leaveService.getRequestTimeAndBalanace().subscribe (
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
