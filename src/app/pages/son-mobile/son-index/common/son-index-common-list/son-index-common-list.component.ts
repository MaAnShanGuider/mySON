import { Component, OnInit,ViewChildren, ElementRef,ViewChild,Renderer2, Input, QueryList, DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-son-index-common-list',
  templateUrl: './son-index-common-list.component.html',
  styleUrls: ['./son-index-common-list.component.scss']
})
export class SonIndexCommonListComponent implements OnInit, DoCheck {
	@Input() data;	
	@Input() title;
	@Input() hasClass;
	Done: boolean = false;
	@ViewChildren('list') list:QueryList<any>;
	@ViewChild('ul_list') ulList:ElementRef;
	listSubscription: Subscription;
	constructor(
		private render:Renderer2
		) {
		console.log(1);
	 }

	ngOnInit() {
		console.log(this.ulList);
	}
	ngDoCheck() {
		// console.log('wocao', this.data);
		if(!!this.data && !this.Done) {
			console.log('lalala');
			let width = this.data.length * 128 + 'px';
			this.render.setStyle(this.ulList.nativeElement, 'min-width', width );
			this.Done = true;
			
		}
		

	}


}
