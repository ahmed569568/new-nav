import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Branch: string;
  position: number;
  price: number;
  cars: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, Branch: 'Hydrogen', price: 1.0079, cars: 'Hyndai ' },
  { position: 2, Branch: 'Helium', price: 4.0026, cars: 'fiat ' },
  { position: 3, Branch: 'Lithium', price: 6.941, cars: 'skoda ' },
  { position: 4, Branch: 'Beryllium', price: 9.0122, cars: 'bmw' },
  { position: 5, Branch: 'Boron', price: 10.811, cars: 'aude 12' },
  { position: 6, Branch: 'Carbon', price: 12.0107, cars: 'lada ' },
  { position: 7, Branch: 'Nitrogen', price: 14.0067, cars: 'puguot' },
  { position: 8, Branch: 'Oxygen', price: 15.9994, cars: 'lansar' },
  { position: 9, Branch: 'Fluorine', price: 18.9984, cars: 'jeeb' },
  { position: 10, Branch: 'Neon', price: 20.1797, cars: 'land over' }
];

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  displayedColumns: string[] = ['Branch', 'price', 'cars', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }
}
