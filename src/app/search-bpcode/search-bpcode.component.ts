import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bpcode',
  templateUrl: './search-bpcode.component.html',
  styleUrls: ['./search-bpcode.component.css']
})
export class SearchBpcodeComponent implements OnInit {

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
