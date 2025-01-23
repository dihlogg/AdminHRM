import { AfterViewInit, Component, Input } from '@angular/core';
@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent implements AfterViewInit {
  @Input() id!: string; // ID riêng để tránh xung đột

  ngAfterViewInit(): void {
    const datepickerElement = document.getElementById(this.id);
    if (datepickerElement) {
      // Khởi tạo thư viện Datepicker
      // new Datepicker(datepickerElement, { autohide: true }); // Tùy chỉnh theo thư viện của bạn
    }
  }
}
