import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideEchartsCore } from 'ngx-echarts';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideEchartsCore({ echarts: () => import('echarts') })
  ]
}).catch((e) => console.error(e));
