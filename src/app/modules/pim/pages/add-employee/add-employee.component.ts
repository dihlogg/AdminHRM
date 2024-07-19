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
    RouterLink
  ],
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: EmployeeApiServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.employees.length === 0) {
      this.refreshData();
    }
  }

  employees: Employee[] = [];

  subUnits: SubUnit[] = [];

  first: number = 0;

  row: number = 5;

  totalRecords: number = 0;

  items!: MenuItem[];

  chartData: any;

  chartOptions: any;

  refreshData() {
    this.service.getEmployees().subscribe(employees => {
      this.service.getSubUnits().subscribe(subUnits => {
        this.subUnits = subUnits;
        this.employees = employees.map(employee => {
          const subUnit = this.subUnits.find(s => s.id === employee.subUnitId);
          if (subUnit) {
            employee.subUnitName = subUnit.subName;
          }
          return {
            ...employee,
            supperVisor: {
              id: employee.supperVisor.id,
              fullName: employee.supperVisor.fullName
            }
          };
        });
        console.log(this.employees);
      });
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

  onPageChange(event: any) {
    this.first = event.first;
    this.row = event.rows;
  }
}

