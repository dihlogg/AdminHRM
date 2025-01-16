import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
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
import { LeaveCard, LeaveCardItems } from 'src/app/core/models/leave.model';
import { LeaveApiServiceService } from 'src/app/core/services/leave/leave-api-service.service';
import { forkJoin } from 'rxjs';

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
  leaveCards: LeaveCard[] = [];
  cardItems: LeaveCardItems | null = null;
  selectedCardId: string | null = null;

  constructor(
    private leaveService: LeaveApiServiceService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadLeaveCards();
  }

  loadLeaveCards(): void {
    this.leaveService.getLeaveCards().subscribe(
      (cards: LeaveCard[]) => {
        this.leaveCards = cards;
        console.log('Leave Cards:', this.leaveCards);

        const defaultCard = this.leaveCards.find(card => card.display_order === 1);
        if (defaultCard) {
          this.selectedCardId = defaultCard.type_id;
          this.loadCardItems(defaultCard.type_id);
        }
      },
      (error) => {
        console.error('Error fetching leave cards:', error);
      }
    );
  }

  loadCardItems(cardId: string): void {
    this.selectedCardId = cardId;

    this.leaveService.getLeaveCardItems(cardId).subscribe(
      (data: LeaveCardItems) => {
        this.cardItems = data;
        console.log('Card Items:', this.cardItems);
      },
      (error) => {
        console.error('Error fetching card items:', error);
      }
    );
  }
}
