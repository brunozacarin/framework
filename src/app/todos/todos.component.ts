import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { TableDataSource, TableItem } from '../todos/table-datasource';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<TableItem>;
  dataSource: TableDataSource;

  displayedColumns = ['userId', 'id', 'title', 'completed'];

  ngOnInit() {
    let dataTable;
    fetch('https://jsonplaceholder.typicode.com/todos')
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
