import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private data;

  constructor(private homeService: HomeService) {
    homeService.getData().subscribe(res => {
      this.data = res.json();
    })
  }

  ngOnInit() {
  }

}
