import { Component, OnInit } from '@angular/core';
import { Set } from "../../../services/sets/set";
import { SetsService } from "../../../services/sets/sets.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-updateset',
  templateUrl: './updateset.component.html',
  styleUrls: ['./updateset.component.css']
})
export class UpdatesetComponent implements OnInit {
  currentSet: Set = {
    setName: '',
    setDay: '',
    setStage: '',
    setBeginTime: '',
    setDuration: '',
  }
  updated = false;

  constructor(private setsService: SetsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSetId(this.route.snapshot.params['id']);
  }

  getSetId(id: number): void {
    this.setsService.getSet(id).subscribe(
      data => { this.currentSet = data; console.log(data) },
      error => { console.log(error); }
    )
  }

  updateSetId(): void {
    const data = {
      setId: this.currentSet.setId,
      setName: this.currentSet.setName,
      setDay: this.currentSet.setDay,
      setStage: this.currentSet.setStage,
      setBeginTime: this.currentSet.setBeginTime,
      setDuration: this.currentSet.setDuration
    };

    this.setsService.updateSet(this.currentSet.setId, data).subscribe(
      response => { console.log(response); this.updated = true },
      error => { console.log(error); }
    )
  }

}
