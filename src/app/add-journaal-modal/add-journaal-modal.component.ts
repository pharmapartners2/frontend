import { Component} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-journaal-modal',
  templateUrl: './add-journaal-modal.component.html',
})
export class AddJournaalModalComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static'
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
  }
}
