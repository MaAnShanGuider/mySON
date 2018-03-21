import { Component, OnInit } from '@angular/core';

interface Boom {
	name: String;
}
@Component({
	selector: 'app-son-index-sort',
	templateUrl: './son-index-sort.component.html',
	styleUrls: ['./son-index-sort.component.scss']
})
export class SonIndexSortComponent implements OnInit {
	data:Array<{}>;
	constructor() { 
		this.data = [
			{title: '精彩活动', color: '#ff8d69', icon: 'icon-iconfontgangcai'},
			{title: '领优惠券', color: '#ffc571', icon: 'icon-iconfontzhaomingdianzi'},
			{title: '厂商目录', color: '#aa91d7', icon: 'icon-wxbgongju'},
			{title: '全部分类', color: '#68b8f7', icon: 'icon-iconfontshouji'}
		]
	}

	ngOnInit() {
		
	}

}
