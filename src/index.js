// Точка входа в приложение

import './index.html';
import './index.scss';
import alert from './modules/module/script';
import ServicesHello from './modules/services/hello';

"use strict";

document.addEventListener('DOMContentLoaded', e=>{
   
   // module
   alert();
   // services
   ServicesHello();

});