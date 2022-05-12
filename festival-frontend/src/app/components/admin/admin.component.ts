import { Component, OnInit } from '@angular/core';
import { DjsService } from "../../services/djs/djs.service";
import { SetsService } from "../../services/sets/sets.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public djs: any = [];
  public djid: any;

  public sets: any = [];
  public setid: any;

  public reviews: any = [];
  public reviewid: any;

  constructor(private setsService: SetsService, private djsService: DjsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllDjs()
    this.getAllSets();
  }

  // DJS
  getAllDjs() {
    this.djsService.getAllDjs().subscribe(
      data => { this.djs = data },
      error => console.error(error),
      () => console.log("All djs are loading")
    )
  }

  deleteDjId(dj: any) {
    this.djsService.deleteDj(dj.djId).subscribe(
      data => { this.djid = data; console.log("Dj is deleted") },
      error => console.log(error),
      () => console.log("Djloaded")
    )
    window.location.reload();
  }

  // SETS
  getAllSets() {
    this.setsService.getAllSets().subscribe(
      data => { this.sets = data },
      error => console.error(error),
      () => console.log("All sets are loading")
    )
  }

  deleteSetId(set: any) {
    this.setsService.deleteSet(set.setId).subscribe(
      data => { this.setid = data; console.log("Session is deleted") },
      error => console.log(error),
      () => console.log("Session loaded")
    )
    window.location.reload();
  }
}
