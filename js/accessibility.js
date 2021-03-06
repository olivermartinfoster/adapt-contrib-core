import Adapt from './adapt';
import a11y from './a11y';

/**
 * Backwards compatibility `Adapt.accessibility` reroutes to `Adapt.a11y`
 * with a warning.
 */
Object.defineProperty(Adapt, 'accessibility', {

  get() {
    a11y.log.deprecated('Adapt.accessibility has moved to Adapt.a11y');
    return a11y;
  }

});
