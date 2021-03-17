import { Component } from '@angular/core';
import materials from "../../sample-data/materials.json";
import KeyLines from 'keylines';

@Component({
  selector: 'app-keylines',
  templateUrl: './keylines.component.html',
  styleUrls: ['./keylines.component.scss']
})
export class KeylinesComponent {

  dataObj = materials;
  materialsData : any[];

  chart : any;

  klReady([chart]: [KeyLines.Chart]) {
    // save the chart reference
    this.chart = chart;

    //parse the JSON data
    this.parseJsonData();

    // load the data into the chart
    this.chart.load(this.materialsData);
    this.chart.layout();
  }

  parseJsonData() {
    let jsonData = this.dataObj;
    let result = [];
    for (var i = 0; i < jsonData.length; i++){
      
      console.log(jsonData[i]);
    }
  }

}

  // parseJsonData(obj) {
  //   const nodes = obj.id.map((node) => ({
  //       id: node.Id,
  //       type: 'node'
  //   }));
  //   const links = obj.links.map((link) => ({
  //       id: `l${link.Id}`,
  //       type: 'link',
  //       id1: link.Source,
  //       id2: link.Target
  //   }));

  //   this.chart = {
  //       type: 'LinkChart',
  //       items: [...nodes, ...links]
  //   };



  // klChartReady(chart: KeyLines.Chart){
  //   this.parseJSONData(this.materialsData, chart)
  //   this.chart = chart;
  // }

  // klChartEvents(event: any) {
  //   if (event.name === 'hover') {
  //     console.log('Chart hover event triggered: ', event.args);
  //   }
  // }

  // KeyLines.ChartData = {
  //   type: 'LinkChart',
  //   items: [ { type: 'node', id: 'ac1', u: 'assets/icons/bank.png', t: '45081063' },
  //   { type: 'link', id: 'l10', id1: 'p2', id2: 'ac3', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l11', id1: 'p3', id2: 'ac3', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l12', id1: 'p3', id2: 'ad1', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l13', id1: 'p4', id2: 'ad2', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l14', id1: 'p4', id2: 'ac4', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l15', id1: 'p5', id2: 'ad3', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l16', id1: 'p5', id2: 'ac2', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l17', id1: 'p6', id2: 'ad3', c: '#ff7f7f', w: 5 },
  //   { type: 'link', id: 'l18', id1: 'p6', id2: 'ac5', c: '#ff7f7f', w: 5 } ]
  // };
