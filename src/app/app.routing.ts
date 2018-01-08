import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelComponent } from './hotel/hotel.component';

const appRoutes : Routes = [
    { path: '',  pathMatch: 'full',component:HotelsComponent  },
   { path: ':lang/hotels', component: HotelsComponent },
    { path: ':lang/hotel/:id', component: HotelComponent }

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
