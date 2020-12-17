import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filterSearch';
  searchText: any;
  pages: Object[] = [
    { link: 'about', bool: true },
    { link: 'cart', bool: true },
    { link: 'contact', bool: true },
  ]
  inputText: string;

  @Input() name: string;


}
