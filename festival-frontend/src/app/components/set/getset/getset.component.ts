import { Component, OnInit } from '@angular/core';
import { SetsService } from "../../../services/sets/sets.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-getset',
  templateUrl: './getset.component.html',
  styleUrls: ['./getset.component.css']
})
export class GetsetComponent implements OnInit {
  public id: any;

  constructor(private setsService: SetsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSetId(this.route.snapshot.params['id'])
  }

  getSetId(id: number) {
    this.setsService.getSet(id).subscribe(
      data => { this.id = data },
      error => console.error(error),
      () => console.log("Set loaded")
    );
  }
}
