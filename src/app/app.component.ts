import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';
import { FlexiconsComponent } from './components/flexicons/flexicons.component';
import { PrimeconfigModule } from './primeconfig/primeconfig.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexiconsComponent, PrimeconfigModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clientapi';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.loadProductsFromFakeApi().subscribe((products) => {
      console.log(products);
    });
  }
}
