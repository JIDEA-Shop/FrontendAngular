import { Component, OnInit } from '@angular/core';
import { MarketinghttpService } from './services/marketinghttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JIDEA SHOP';
  constructor(private marketingService:MarketinghttpService){}
  ngOnInit(): void {
    this.marketingService.DownloadCatalog();
  }
}
