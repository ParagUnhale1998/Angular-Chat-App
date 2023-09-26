import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-list-rendering',
  templateUrl: './dynamic-list-rendering.component.html',
  styleUrls: ['./dynamic-list-rendering.component.scss']
})
export class DynamicListRenderingComponent {
  products!: any[];
  filterText: string = '';
  sortOption: string = 'title';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Assuming you have the JSON data hosted at a URL
    this.http.get<any>('assets/products.json').subscribe(data => {
      this.products = data.products;
    });
  }

  get filteredProducts(): any[] {
    return this.products.filter(product =>
      product.title.toLowerCase().includes(this.filterText.toLowerCase())
    ).sort((a, b) => {
      if (this.sortOption === 'title') {
        return a.title.localeCompare(b.title);
      } else if (this.sortOption === 'price') {
        return a.price - b.price;
      }
      // Add more sorting options if needed
    });
  }

}
