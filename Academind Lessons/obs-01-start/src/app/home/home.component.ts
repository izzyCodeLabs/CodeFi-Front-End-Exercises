import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstObsSub:Subscription;

  constructor() { }

  ngOnInit() {
    //this.firstObsSub = interval(1000).subscribe(count => {console.log(count)});
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
        },  1000);
    });
    customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }
  ngOnDestroy() {
    this.firstObsSub.unsubscribe();
  }
}
