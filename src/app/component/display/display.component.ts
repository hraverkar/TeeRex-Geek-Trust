import { SnackbarService } from './../../services/snackbar.service';
import { ITData } from './../../interface/itdata';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private _dataService: DataService, private _snackbar: SnackbarService) { }
  public teesData: ITData[];

  public ngOnInit(): void {
    this.getDisplaytees();
  }
  public getDisplaytees(): void {
    this._dataService.getAllData().subscribe((res) => {
      this.teesData = res.body;
    }, (error) => {
      this._snackbar.error(error.message, 'Error');
    });
  }
}
