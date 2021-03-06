import LockingModel from '../models/lockingModel';

export default class ItemModel extends LockingModel {

  defaults() {
    return {
      _isActive: false,
      _isVisited: false
    };
  }

  reset() {
    this.set({ _isActive: false, _isVisited: false });
  }

  toggleActive(isActive = !this.get('_isActive')) {
    this.set('_isActive', isActive);
  }

  toggleVisited(isVisited = !this.get('_isVisited')) {
    this.set('_isVisited', isVisited);
  }

}
