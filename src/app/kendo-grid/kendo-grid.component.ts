import {
  SortDescriptor,
  orderBy,
  DataResult,
} from '@progress/kendo-data-query';

import {
  GridDataResult
} from '@progress/kendo-angular-grid';

import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
          [data]="gridView"
          [sortable]="{ mode: 'multiple' }"
          [sort]="sort"
          (sortChange)="sortChange($event)"
        >
        <kendo-grid-column field="ProductID" title="Product ID" width="120">
        </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Product Name">
        </kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
        </kendo-grid-column>
      </kendo-grid>
  `
})
export class KendoGridTest {
  private sort: SortDescriptor[] = [];
  private gridView: GridDataResult;
  private products: any[] = [{
    "ProductID": 1,
    "ProductName": "Chai Thé",
    "UnitPrice": 18.0000,
    "Discontinued": true
  }, {
    "ProductID": 2,
    "ProductName": "Chang",
    "UnitPrice": 19.0000,
    "Discontinued": false
  }, {
    "ProductID": 3,
    "ProductName": "Aniseed Syrup",
    "UnitPrice": 10.0000,
    "Discontinued": false
  }, {
    "ProductID": 4,
    "ProductName": "Chef Anton's Cajun Seasoning",
    "UnitPrice": 22.0000,
    "Discontinued": false
  }, {
    "ProductID": 5,
    "ProductName": "Chef Anton's Gumbo Mix",
    "UnitPrice": 21.3500,
    "Discontinued": false
  }, {
    "ProductID": 6,
    "ProductName": "Grandma's Boysenberry Spread",
    "UnitPrice": 25.0000,
    "Discontinued": false
  }];

  constructor() {
    this.loadProducts();
  }

  protected sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = {
      data: orderBy(this.products, this.sort),
      total: this.products.length
    };
  }
}
