import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { httpLoaderFactory } from './app-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeBackendModule } from './backend';
import { BikeCommonModule } from './common/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    BikeCommonModule.forRoot(localStorage, {
      backendApi: environment.backendApi,
    }),
    BikeBackendModule.forRoot({
      rootUrl: environment.backendApi,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) {
    this.initializeIcons();
    this.initialTranslate();
  }

  private initializeIcons(): void {
    this.iconRegistry.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }

  private initialTranslate(): void {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
