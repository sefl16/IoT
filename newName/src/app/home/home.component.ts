import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TestApi } from '../testapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: Object;
  result: any;
  arr = [];
  sensors = {};

  constructor(
    private data: DataService,
    private api: TestApi
    ) { }

  ngOnInit() {
    this.data.getAllEmployees().subscribe(data => {
      this.result = JSON.parse(data.toString());
      console.log(this.result)

      for(let res of this.result.metrics) {
        var obj = res.split(" ");
        obj[2] = new Date(Math.floor(obj[2]))
        obj[0] = obj[0].split(/(\{)/g)
        obj[0][2] = obj[0][1] + obj[0][2]
        obj[0].splice(1,1)

        obj[0][1] = obj[0][1].replace(/=/g, ":")

        if(obj[0][0] in this.sensors) {
          this.sensors[obj[0][0]].push(obj)
        } else {
          this.sensors[obj[0][0]] = []
          this.sensors[obj[0][0]].push(obj)
        }
      }
      this.arr = this.arr.sort(function(a,b) {
          return a[2] - b[2];
      });

      console.log(this.arr)
      console.log(this.sensors)
    });

    for(let sensor of this.sensors) {
      this.barChartLabels.push(sensor[0][0])
      this.barChartData[0].data.push(sensor[1])
    }
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Series A'},
  ];

  firstClick() {
    this.h1Style = true;
  }
}
