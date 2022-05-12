import { Component, OnInit } from '@angular/core';
import { Dj } from "../../../services/djs/dj";
import { DjsService } from "../../../services/djs/djs.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-updatedj',
  templateUrl: './updatedj.component.html',
  styleUrls: ['./updatedj.component.css']
})
export class UpdatedjComponent implements OnInit {
  currentDj: Dj = {
    djName: '',
    djBio: '',
    djGenre: ''
  }
  updated = false;

  constructor(private djsservice: DjsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDjId(this.route.snapshot.params['id'])
  }

  getDjId(id: number) {
    this.djsservice.getDj(id).subscribe(
      data => { this.currentDj = data; console.log(data) },
      error => { console.log(error); }
    )
  }

  updateDjId(): void {
    const data = {
      djId: this.currentDj.djId,
      djName: this.currentDj.djName,
      djBio: this.currentDj.djBio,
      djGenre: this.currentDj.djGenre
    };

    this.djsservice.updateDj(this.currentDj.djId, data).subscribe(
      response => { console.log(response); this.updated = true },
      error => { console.log(error); }
    )
  }

}
