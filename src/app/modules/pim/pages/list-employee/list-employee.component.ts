import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
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
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
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
    InputTextModule
  ],
})
export class ListEmployeeComponent implements OnInit {

  constructor(private service: EmployeeApiServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.employees.length === 0 || this.subUnits.length === 0) {
      this.refreshData();
    }
  }

  employees: Employee[] = [];

  subUnits: SubUnit[] = [];

  first: number = 0;

  row: number = 5;

  totalRecords: number = 0;

  searchEmployee = '';
  status = '';
  jobTitle = '';
  supervisorName = '';
  subName = '';

  totalCount: number = 0;

  pageIndex: number = 0; 

  pageSize: number = 5;

  // Updated for multiple sort fields
  sortFields: string[] = ['firstName'];
  sortOrders: string[] = ['ASC'];

  refreshData() {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    });
    this.service.getSubUnits().subscribe(data => {
      this.subUnits = data;
    });
    this.pageIndex = 1;
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.service.getPagingRecord(this.pageIndex, this.pageSize, this.sortFields, this.sortOrders).subscribe(
      data => {
        this.employees = data.items;
        this.totalRecords = data.totalCount;
        this.pageIndex = data.pageIndex;
        this.pageSize = data.pageSize;
      },
      error => {
        console.error('Failed to load employees');
      }
    );
}

  deleteEmployee(idEmployee: any) {
    const confirmDelete = confirm('Do you want to delete this employee?');
    if (confirmDelete) {
      this.service.deleteEmployee(idEmployee).subscribe(() => {
        this.refreshData();
        this.loadEmployees();
      });
    }
  }

  filteredEmployees(searchEmployee: string, status?: string, jobTitle?: string, supervisorName?: string, subName?: string) {
    if (!searchEmployee && !status && !jobTitle && !supervisorName && !subName) {
      this.refreshData();
    } else {
      this.service.searchEmployees(searchEmployee, status, jobTitle, supervisorName, subName).subscribe(data => {
        this.employees = data;
      });
    }
  }

  onPageChange(event: any): void {
    this.pageIndex = event.page + 1;  // PrimeNG Paginator pages are zero-based
    this.pageSize = event.rows;
    this.loadEmployees();
  }

  onSortChange(event: any): void {
    const field = event.field;
    const order = event.order === 1 ? 'ASC' : 'DESC';
    
    const index = this.sortFields.indexOf(field);
    if (index > -1) {
      this.sortOrders[index] = order;
    } else {
      this.sortFields.push(field);
      this.sortOrders.push(order);
    }
    
    this.loadEmployees();
  }

  onSortIconClick(field: string): void {
    const index = this.sortFields.indexOf(field);
    if (index === -1) {
      this.sortFields.push(field);
      this.sortOrders.push('ASC');
    } else if (this.sortOrders[index] === 'ASC') {
      this.sortOrders[index] = 'DESC';
    } else {
      this.sortFields.splice(index, 1);
      this.sortOrders.splice(index, 1);
    }
    this.loadEmployees();
  }


  getSubName(subUnitId: string | null): string {
    const subUnit = this.subUnits.find(unit => unit.id === subUnitId);
    return subUnit ? subUnit.subName : 'N/A';
  }
}