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

  items!: MenuItem[];

  chartData: any;

  chartOptions: any;

  refreshData() {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    });
    this.service.getSubUnits().subscribe(data => {
      this.subUnits = data;
    });
  }

  deleteEmployee(idEmployee: any) {
    const confirmDelete = confirm('Do you want to delete this employee?');
    if (confirmDelete) {
      this.service.deleteEmployee(idEmployee).subscribe(() => {
        this.refreshData();
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

  onPageChange(event: any) {
    this.first = event.first;
    this.row = event.rows;
  }

  getSubName(subUnitId: string | null): string {
    const subUnit = this.subUnits.find(unit => unit.id === subUnitId);
    return subUnit ? subUnit.subName : 'N/A';
  }
}

