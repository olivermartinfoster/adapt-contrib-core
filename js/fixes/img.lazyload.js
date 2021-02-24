import Adapt from './adapt';
import './templates';
import { find, clone } from './reactHelpers';

/**
 * 27 April 2020 https://github.com/adaptlearning/adapt_framework/issues/2734
 * Chrome on Android defers load events on images when lite mode is enabled
 * and as part of a data saving technique.
 *
 * Add a loading="eager" attribute to all template and partial img tags where
 * the loading attribute is missing.
 */
Adapt.on('app:dataReady', () => {
  const config = Adapt.config.get('_fixes');
  if (config && config._imgLazyLoad === false) return;
  applyImgLoadingFix();
});

function applyImgLoadingFix() {
  const findImgTag = /<img([^>]*)>/gi;
  const hasLoadingAttr = / loading=/gi;
  Adapt.on('template:postRender partial:postRender', event => {
    const imgTagsFound = event.value.match(findImgTag);
    if (!imgTagsFound) {
      return;
    }
    event.value = imgTagsFound.reduce((value, img) => {
      if (hasLoadingAttr.test(img)) {
        return value;
      }
      // Add loading="eager" by default
      return value.replace(img, img.replace(findImgTag, '<img loading="eager"$1>'));
    }, event.value);
  });
  Adapt.on('reactTemplate:postRender', function(event) {
    const hasImageTagWithNoLoadingAttr = find(event.value, component => {
      if (component.type !== 'img') return;
      if (component.props.loading) return;
      return true;
    });
    if (!hasImageTagWithNoLoadingAttr) return;
    // Strip object freeze and write locks by cloning
    event.value = clone(event.value, true, component => {
      if (component.type !== 'img') return;
      if (component.props.loading) return;
      component.props.loading = 'eager';
    });
  });
}
