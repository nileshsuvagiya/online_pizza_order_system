import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { IngredientsPipe } from './pipes/ingredients.pipe';
import { ToppingsPipe } from './pipes/toppings.pipe';

@NgModule({
  declarations: [
    IngredientsPipe,
    ToppingsPipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  exports:[
    IngredientsPipe,
    ToppingsPipe,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class SharedModule { }
