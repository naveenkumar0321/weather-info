import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
const materialComponents = [
                             MatToolbarModule,
                             MatInputModule,
                             MatFormFieldModule,
                             MatButtonModule,
                             MatGridListModule,
                             MatTableModule

]
@NgModule({
 
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
