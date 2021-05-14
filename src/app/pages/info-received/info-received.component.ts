import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

import { DialogTermAcceptComponent } from 'src/app/components/dialog-term-accept/dialog-term-accept.component';

@Component({
  selector: 'app-info-received',
  templateUrl: './info-received.component.html',
  styleUrls: ['./info-received.component.css']
})
export class InfoReceivedComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogTermAcceptComponent, {
      disableClose: true
    });
  }

}
