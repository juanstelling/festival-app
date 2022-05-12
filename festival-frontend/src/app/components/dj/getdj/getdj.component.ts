import { Component, OnInit } from '@angular/core';
import { DjsService } from "../../../services/djs/djs.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-getdj',
  templateUrl: './getdj.component.html',
  styleUrls: ['./getdj.component.css']
})
export class GetdjComponent implements OnInit {
  public id: any;

  constructor(private djsService: DjsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDjId(this.route.snapshot.params['id'])
  }

  getDjId(id: number) {
    this.djsService.getDj(id).subscribe(
      data => { this.id = data },
      error => console.error(error),
      () => console.log("Dj loaded")
    )
  }

}
