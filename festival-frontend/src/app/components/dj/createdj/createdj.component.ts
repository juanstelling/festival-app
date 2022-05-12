import { Component, OnInit } from '@angular/core';
import { Dj } from "../../../services/djs/dj";
import { DjsService } from "../../../services/djs/djs.service";

@Component({
  selector: 'app-createdj',
  templateUrl: './createdj.component.html',
  styleUrls: ['./createdj.component.css']
})
export class CreatedjComponent implements OnInit {
  dj: Dj = {
    djName: '',
    djBio: '',
    djGenre: ''
  }
  submitted = false;

  constructor(private djsService: DjsService) { }

  ngOnInit(): void {
  }

  saveDj(): void {
    const data = {
      djName: this.dj.djName,
      djBio: this.dj.djBio,
      djGenre: this.dj.djGenre
    };

    this.djsService.createDj(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => { console.log(error) }
    );
  }

  newDj(): void {
    this.submitted = false;
    this.dj = {
      djName: '',
      djBio: '',
      djGenre: ''
    }
  }
}
