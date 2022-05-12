import { Component, OnInit } from '@angular/core';
import {SetsService} from "../../../services/sets/sets.service";
import {Set} from "../../../services/sets/set";

@Component({
  selector: 'app-createset',
  templateUrl: './createset.component.html',
  styleUrls: ['./createset.component.css']
})
export class CreatesetComponent implements OnInit {
  set: Set = {
    setName: '',
    setDay: '',
    setStage: '',
    setBeginTime: '',
    setDuration: '',
  }
  submitted = false;

  constructor(private setsService:SetsService) { }

  ngOnInit(): void {
  }

  saveSet() : void {
    const data = {
      setName: this.set.setName,
      setDay: this.set.setDay,
      setStage: this.set.setStage,
      setBeginTime: this.set.setBeginTime,
      setDuration: this.set.setDuration
    };

    this.setsService.createSet(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newSet() : void {
    this.submitted = false;
    this.set = {
      setName: '',
      setDay: '',
      setStage: '',
      setBeginTime: '',
      setDuration: '',
    }
  }

}
