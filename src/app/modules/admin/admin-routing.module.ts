import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { from } from 'rxjs';
import { AdminUsermanagementComponent } from './pages/admin-usermanagement/admin-usermanagement.component';
const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'admin-usermanagement', pathMatch: 'full' },
            { path: 'admin-usermanagement', component: AdminUsermanagementComponent },
            { path: '**', redirectTo: 'admin-usermanagement' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }