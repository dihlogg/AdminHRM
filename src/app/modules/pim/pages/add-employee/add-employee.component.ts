import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { Employee, Supervisor } from 'src/app/core/models/employee.model';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';
import { HttpClient } from '@angular/common/http';
import { SubUnit } from 'src/app/core/models/subUnit.model';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'add-list-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
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
    ToastModule
  ],
  providers: [MessageService]
})
export class AddEmployeeComponent implements OnInit {

  employeeInfo: Employee = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    subUnitId: null,
    status: '',
    employeeId: null
  };

  constructor(private service: EmployeeApiServiceService, 
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {}

  createEmployee() {
    this.service.postEmployee(this.employeeInfo).subscribe(response => {
      console.log('Employee created successfully', response);
    }, error => {
      console.error('Error creating employee', error);
    });
  }
  addEmployee(employeeData: any) {
    this.service.postEmployee(employeeData).subscribe(
      (response) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Employee added successfully!'});
        setTimeout(() => {
          this.router.navigate(['/pim/list-employee']);
        }, 1500);
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Failed to add employee!'});
      }
    );
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Action completed!'});
  }
}


