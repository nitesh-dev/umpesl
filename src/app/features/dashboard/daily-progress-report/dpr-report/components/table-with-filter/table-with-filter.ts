import { Component } from '@angular/core';
import { Select } from "@shared/components/ui/select/select";
import { TableView } from "@shared/components/table-view/table-view";

@Component({
  selector: 'app-table-with-filter',
  imports: [Select, TableView],
  templateUrl: './table-with-filter.html',
  styleUrl: './table-with-filter.scss'
})
export class TableWithFilter {

}
