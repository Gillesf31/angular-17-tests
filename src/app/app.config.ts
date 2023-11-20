import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {UserService} from "./users/service/user.service";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient(), UserService],
};
