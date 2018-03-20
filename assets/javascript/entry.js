import '../css/app.scss';
import checker from './checkNetwork'

if(navigator.serviceWorker)
  navigator.serviceWorker.register('/sw.js');
