import { Component, OnInit } from '@angular/core';
import {DjsService} from "../../services/djs/djs.service";

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  public djs: any = [];

  constructor(private djsService: DjsService) { }

  ngOnInit(): void {
    this.getAllDjs();
  }

  getAllDjs() {
    this.djsService.getAllDjs().subscribe(
      data => {this.djs = data},
      error => console.log(error),
      () => console.log('Djs loaded')
    )
  }
}
