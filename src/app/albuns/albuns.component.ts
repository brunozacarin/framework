import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { TableDataSource, TableItem } from '../albuns/table-datasource';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<TableItem>;
  dataSource: TableDataSource;

  displayedColumns = ['userId', 'id', 'title'];

  ngOnInit() {
    let dataTable;
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => {
        dataTable = json,
          console.log(dataTable);
        this.dataSource = new TableDataSource(dataTable);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      });
  }

}
