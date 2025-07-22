import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  //imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit, OnDestroy {
  dogImg = ""

  ngOnInit(): void {

    setTimeout(() => {
      this.dogImg = "https://tse2.mm.bing.net/th/id/OIP.RE5hy-cYDEedlP-woCr7HgHaE9?pid=Api&P=0&h=220"

      console.log('Data has been fetched on INIT!');
      console.log('Subscribe for EVENTS');
      
    }, 3000);
  }

  ngOnDestroy(): void {
    console.log('Unsubscribe for EVENTS');
  }
  }


