import { Directive, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSonSwiper]'
})
export class SonSwiperDirective {

	constructor(
		private ele: ElementRef,
		private render2: Renderer2
		) { 
		console.log('我是指令哦');
	}
	ngAfterViewInit() {
		
		setTimeout(()=>{
			// 要用到克隆节点，cloneNode，不然只是传引用。元素还会是那么几个。
			let len = this.ele.nativeElement.children.length;
			let firstNode = this.ele.nativeElement.firstElementChild.cloneNode(true);
			let lastNode = this.ele.nativeElement.lastElementChild.cloneNode(true);

			this.childrenMap(this.ele.nativeElement.children);
			this.render2.setAttribute(firstNode, 'li-id', len);
			this.render2.setAttribute(lastNode, 'li-id', '-1');
			this.render2.appendChild(this.ele.nativeElement, firstNode);
			this.render2.insertBefore(this.ele.nativeElement, lastNode, this.ele.nativeElement.firstElementChild );
			// console.log(this.ele.nativeElement.children);
		},800)
	
	}
	childrenMap(htmlCollection: HTMLCollection):void {
		for(let i = 0; i< htmlCollection.length; i++) {
			this.render2.setAttribute(htmlCollection[i], 'li-id',String(i));
		}
	}
}
