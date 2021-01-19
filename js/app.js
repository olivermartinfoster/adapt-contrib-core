import Adapt from './adapt';
import './templates';
import './fixes';
import './accessibility';
import './data';
import './offlineStorage';
import './logging';
import './tracking';
import './device';
import './drawer';
import './notify';
import './router';
import './models/lockingModel';
import './mpabc';
import './helpers';
import './scrolling';
import './headings';
import './navigation';

$('body').append(Handlebars.templates.loading());

Adapt.data.on('ready', function triggerInit() {
  Adapt.log.debug('Calling Adapt.init');

  Adapt.init();

  Adapt.off('adaptCollection:dataLoaded courseModel:dataLoaded');
}).init();
