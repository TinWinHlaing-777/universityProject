import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public items: any;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
  }
  loadData() {
    let data: any;
    data = this.http.get('https://api.myjson.com/bins/1hfe3e');
    data.subscribe((result: any) => {
      this.items = result;
    });
  }
  Assignment() {
    let assignment: any;
    assignment = this.http.get('https://api.myjson.com/bins/iipw6'); 
    assignment.subscribe((result: any) => {
      this.items = result.filter((items: { title: string; }) => items.title === 'Assignment');
    });
  }
  Tutorial() {
    let tutorial: any;
    tutorial = this.http.get('https://api.myjson.com/bins/iipw6');
    tutorial.subscribe((result: any) => {
      this.items = result.filter((items: { title: string; }) => items.title === 'Tutorial');
    });
  }

  Quiz() {
    let quiz: any;
    quiz = this.http.get('https://api.myjson.com/bins/lt9ve');
    quiz.subscribe((result: any) => {
      this.items = result.filter((items: { title: string; }) => items.title === 'Quiz');
    });
  }

}
