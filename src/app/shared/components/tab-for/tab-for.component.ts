import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {

  selectedFrameWork : string ='angular'

  tabArr : Array<Itab> = [
    {
      tabTitle : 'angular',
      tabContent : '<p class="m-0 alert alert-info"><strong>Angular</strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum cupiditate fuga quasi libero est error minima recusandae illo voluptate, odio quisquam natus optio architecto neque facere? Sunt, illum distinctio.</p>'
    },
    {
      tabTitle : 'aws',
      tabContent : '<p class="m-0 alert alert-info"><strong>AWS</strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum cupiditate fuga quasi libero est error minima recusandae illo voluptate, odio quisquam natus optio architecto neque facere? Sunt, illum distinctio.</p>'
    },
    {
      tabTitle : 'react',
      tabContent : '<p class="m-0 alert alert-info"><strong>React</strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum cupiditate fuga quasi libero est error minima recusandae illo voluptate, odio quisquam natus optio architecto neque facere? Sunt, illum distinctio.</p>'
    },
]
    constructor() { }

  ngOnInit(): void {
  }

  onClickTab(val : string){
    console.log(val);
    this.selectedFrameWork = val;
  }
}
