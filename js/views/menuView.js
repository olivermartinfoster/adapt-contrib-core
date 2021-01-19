import ContentObjectView from '../views/contentObjectView';
import MenuItemView from '../views/menuItemView';

class MenuView extends ContentObjectView {}

Object.assign(MenuView, {
  /**
   * TODO:
   * child view here should not be fixed to the MenuItemView
   * menus may currently rely on this
   */
  childContainer: '.js-children',
  childView: MenuItemView,
  type: 'menu',
  template: 'menu'
});

export default MenuView;
