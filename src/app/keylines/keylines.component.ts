import { Component, OnInit } from '@angular/core';
// import data from "../../sample-data/materials.json";
import jsonData from "../../sample-data/parts.json";
import KeyLines from 'keylines';

@Component({
  selector: 'app-keylines',
  templateUrl: './keylines.component.html',
  styleUrls: ['./keylines.component.scss']
})
export class KeylinesComponent implements OnInit{

  dataObj = jsonData;

  parseJsonData() {
    var jsonData = this.dataObj;
    var chartItems = [];
    for (var i = 0; i < jsonData.length; i++){
      chartItems.push({
        type: 'node',
        id: jsonData[i].id,
        c: 'rgb(255, 53, 27)',
        t: jsonData[i].name
      });
      chartItems.push({
        type: 'link',
        id: jsonData[i].id,
        id1: jsonData[i].category,
        id2: '',
      });
    }
    console.log(chartItems)
    return chartItems;
  }

  generateRandomData(){
    function randInt(begin, end) {
      return Math.floor(Math.random() * (end - begin)) + begin;
    }
    var chartItems = [];
    for (var i = 0; i < 100; i++) {
      chartItems.push({
        type: 'node',
        id: 'item' + i,
        c: 'rgb(255, 53, 27)',
        t: 'item' + i
      });
      chartItems.push({
        type: 'link',
        id: 'link' + i,
        id1: 'item' + i,
        id2: 'item' + ((i > 50) ? randInt(0, 51) : randInt(51, 100))
      });
    }
    return chartItems;
  };

  ngOnInit(): void {}

  chart: KeyLines.Chart;

  data: KeyLines.ChartData = {
    type: 'LinkChart',
    items: this.parseJsonData()
  };

  klReady([chart]: [KeyLines.Chart]) {
    // save the chart reference
    this.chart = chart;
    console.log(this.data)

    // load the data into the chart
    this.chart.load(this.data);
    this.chart.layout();
  }

}
