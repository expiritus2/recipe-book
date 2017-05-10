import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingridient.model';
import {ShoppinListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInpuRef: ElementRef;
  @ViewChild('amountInput') amountInpuRef: ElementRef;

  constructor(private slService: ShoppinListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInpuRef.nativeElement.value;
    const ingAmount = this.amountInpuRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
