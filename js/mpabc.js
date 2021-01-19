import Adapt from './adapt';
import Data from './data';
import AdaptSubsetCollection from './collections/adaptSubsetCollection';
import ContentObjectModel from './models/contentObjectModel';
import ArticleModel from './models/articleModel';
import BlockModel from './models/blockModel';
import ComponentModel from './models/componentModel';

import './models/courseModel';
import './models/menuModel';
import './models/pageModel';
import './views/pageView';
import './views/articleView';
import './views/blockView';

class MPABC extends Backbone.Controller {

  initialize() {
    // Example of how to cause the data loader to wait for another module to setup
    this.listenTo(Data, {
      loading: this.waitForDataLoaded,
      loaded: this.onDataLoaded
    });
    this.setupSubsetCollections();
  }

  waitForDataLoaded() {
    // Tell the data loader to wait
    Adapt.wait.begin();
  }

  onDataLoaded() {
    // Tell the data loader that we have finished
    Adapt.wait.end();
  }

  setupSubsetCollections() {
    Adapt.contentObjects = new AdaptSubsetCollection(null, { parent: Data, model: ContentObjectModel });
    Adapt.articles = new AdaptSubsetCollection(null, { parent: Data, model: ArticleModel });
    Adapt.blocks = new AdaptSubsetCollection(null, { parent: Data, model: BlockModel });
    Adapt.components = new AdaptSubsetCollection(null, { parent: Data, model: ComponentModel });
  }

}

export default (Adapt.mpabc = new MPABC());
