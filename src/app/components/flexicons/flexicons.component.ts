import { Component } from '@angular/core';
import { PrimeconfigModule } from '../../primeconfig/primeconfig.module';

@Component({
  selector: 'app-flexicons',
  standalone: true,
  imports: [PrimeconfigModule],
  templateUrl: './flexicons.component.html',
  styleUrl: './flexicons.component.css',
})
export class FlexiconsComponent {}
