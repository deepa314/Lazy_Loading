import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CustomPreloadStrategy } from './preload/custom-preload';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, CustomPreloadStrategy],
})
export class SharedModule {}
