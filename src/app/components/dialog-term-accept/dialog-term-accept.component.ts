import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogSuccessfulRegistrationComponent } from 'src/app/components/dialog-successful-registration/dialog-successful-registration.component';

@Component({
  selector: 'app-dialog-term-accept',
  templateUrl: './dialog-term-accept.component.html',
  styleUrls: ['./dialog-term-accept.component.css']
})
export class DialogTermAcceptComponent {
  public accepted = false;

  constructor(private dialog: MatDialog) { }

  confirm() {
    this.dialog.open(DialogSuccessfulRegistrationComponent, {
      disableClose: true
    });
  }

}
