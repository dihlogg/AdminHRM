import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { LayoutComponent } from '../layout/layout.component';
import { NavbarComponent } from '../layout/components/navbar/navbar.component';
import { FooterComponent } from '../layout/components/footer/footer.component';
import { Employee, superVisor } from 'src/app/core/models/employee.model';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';
import { HttpClient } from '@angular/common/http';
import { SubUnit } from 'src/app/core/models/subUnit.model';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-pim',
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
    SidebarComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ToggleButtonModule
  ],
  templateUrl: './pim.component.html',
})
export class PimComponent implements OnInit {

  constructor(private service: EmployeeApiServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.employees.length === 0) {
      this.refreshData();
    }
  }

  employees: Employee[] = [];

  subUnits: SubUnit[] = [];

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
}
