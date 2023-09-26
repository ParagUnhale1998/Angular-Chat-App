import { Component } from '@angular/core';
import { ApiintegrationService } from '../apiintegration.service';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.scss']
})
export class RestapiComponent {
  products: any[] = [];
  isLoading = false;
  isError = false;

  constructor(private apiService: ApiintegrationService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getPosts().subscribe({
      next:(data:any) => {
        this.products = data.products;
        // console.log(data)
        this.isLoading = false;
      },
      error : (error) => {
        console.error('Error:', error);
        this.isError = true;
        this.isLoading = false;
      }
    });
  }
}
