import Adapt from '../adapt';
import ContentObjectView from '../views/contentObjectView';

class PageView extends ContentObjectView {

  remove() {
    if (this.$pageLabel) {
      this.$pageLabel.remove();
    }
    super.remove();
  }

}

Object.assign(PageView, {
  childContainer: '.article__container',
  type: 'page',
  template: 'page'
});

Adapt.register('page', { view: PageView });

export default PageView;
