# LOCALAIZATION HELP

## First Of All 

> you need to install required dependencies

` >> npm install @ngx-translate/core @ngx-translate/http-loader --save `

> **npm didn't work out for me if you had any troubles use yarn instead**

` >> yarn add  @ngx-translate/core @ngx-translate/http-loader --save`

### then you need to import this configuraions in **app.module.ts**
    
    
    import { BrowserModule } from '@angular/platform-browser';
    import { HttpClientModule, HttpClient } from '@angular/common/http';
    import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
    import { TranslateHttpLoader } from '@ngx-translate/http-loader';
    

> then export this function 


    export function HttpLoaderFactory(http: HttpClient) {
      return new TranslateHttpLoader(http, './assets/i18n/');
    }


> and in @ngmodule write down this in **imports**


 
    HttpClientModule, 
        TranslateModule.forRoot({ 
          defaultLanguage: 'en',
          loader: {<br>
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
     


### this far you need to setup a service called translation.service.ts
` >> ng g service translation`

> Update **translation.service.ts** with the following content:

    import { Injectable } from '@angular/core';
    
    import { TranslateService } from '@ngx-translate/core';
    
    @Injectable({
      providedIn: 'root',
    })
    export class TranslationService {
      constructor(private translate: TranslateService) {}
    
      setLanguage(language: string) {
        this.translate.use(language);
      }
    } 

###  Implement language switching in **app.component.ts**
  
    import { TranslationService } from './translation.service';
    export class AppComponent {
      constructor(private translationService: TranslationService) {}
    
      switchLanguage(language: string) {
        this.translationService.setLanguage(language);
      }
    } 


### all good till now, just little more steps
> you need to make 2 json files for translation one is en.json other is your desired langauge file like fr.json in our case would be ar.json

> what to write in ? we creates objects , all keys and values would be strings :



    {
      "testTrans": {
        "TITLE": "مرحبًا!",
        "MESSAGE": "أهلاً بك في تطبيقنا."
      }
    } 


> testTrans is an optional name to indicate what you want to do 

> for english we make another file named en.json

    
    {
      "testTrans": {
        "TITLE": "Hello!",
        "MESSAGE": "Welcome to our application."
      }
    }


### where this files would be ?
> in src/assets make a folder named i18n and place this folders in


### last thing last we go to html component
> which to be translated and type this code below

    <div>
      <h2>{{ 'testTrans.title' | translate }}</h2>
      <p> {{'testTrans.massage' | translate }} </p>
      <button (click)="switchLanguage('en')">English</button>
      <button (click)="switchLanguage('ar')">Arabic</button>
    </div>


# And Voila We All Set Up
