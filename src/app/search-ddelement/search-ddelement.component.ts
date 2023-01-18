import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-ddelement',
  templateUrl: './search-ddelement.component.html',
  styleUrls: ['./search-ddelement.component.css']
})
export class SearchDdelementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //-------------------------------------------------------------------------------------
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  //-------------------------------------------------------------------------------------
}
