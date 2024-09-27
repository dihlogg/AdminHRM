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
import { ActivatedRoute } from '@angular/router';
import { Employee, Supervisor } from 'src/app/core/models/employee.model';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';
import { HttpClient } from '@angular/common/http';
import { SubUnit } from 'src/app/core/models/subUnit.model';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'add-info-employee',
  templateUrl: './info-employee.component.html',
  styleUrls: ['./info-employee.component.css'],
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
  ],
})
export class InfoEmployeeComponent implements OnInit {

  constructor(private service: EmployeeApiServiceService, 
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

    ngOnInit(): void {
      this.employeeId = this.route.snapshot.paramMap.get('id');
      if (this.employeeId) {
        this.getEmployeeData(this.employeeId);
      }
    }

  employees: Employee[] = [];

  subUnits: SubUnit[] = [];

  employeeId: string | null = null;

  employeeData: any = {};

  jobTitles: string[] = ['Dev', 'Tester', 'PM', 'Designer'];

  empStatus: string[] = ['Full Time', 'Part Time', 'Contract'];

  employeeInfo: Employee = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    subUnitId: null,
    status: '',
    employeeId: null
  };

  getEmployeeData(employeeId: string) {
    this.service.getEmployeeById(employeeId).subscribe(data => {
      this.employeeInfo = data;
    });
  }
  updateEmployeeData() {
    this.service.putEmployee(this.employeeInfo).subscribe(response => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee updated successfully!' });
      this.navigateToListEmployee();
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update employee!' });
    });
  }
  navigateToListEmployee() {
    this.router.navigate(['/pim/list-employee']);
  }
}


