import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  countries: any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(resp=>{
      this.countries = resp;
    })

  }

  drop(event: CdkDragDrop<any>){

    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);

  }

}
