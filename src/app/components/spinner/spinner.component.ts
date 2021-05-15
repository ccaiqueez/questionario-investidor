import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() loading: boolean = false;
  public condi: boolean

  constructor() { }

  ngOnInit(): void {
    console.log('bota: ', this.loading)
    this.condi = this.loading
  }

}
