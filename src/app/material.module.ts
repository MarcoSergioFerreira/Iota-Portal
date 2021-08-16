import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
    providers: [],
})
export class MaterialModule { }
