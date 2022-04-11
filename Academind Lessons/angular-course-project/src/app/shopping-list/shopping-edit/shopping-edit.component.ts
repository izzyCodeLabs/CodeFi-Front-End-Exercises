import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef:ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef:ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem() {
    const itmName:string = this.nameInputRef.nativeElement.value;
    const itmAmount:number = this.amountInputRef.nativeElement.value;
    const newItem = new Ingredient(itmName, itmAmount);
    this.itemAdded.emit(newItem);
  }
}
