/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MDCComponent from '@material/base/component';

import MDCNotchedOutlineAdapter from './adapter';
import MDCNotchedOutlineFoundation from './foundation';
import {strings} from './constants';

/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */
class MDCNotchedOutline extends MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCNotchedOutline}
   */
  static attachTo(root) {
    return new MDCNotchedOutline(root);
  }

  /**
    * Updates the SVG path of the focus outline element based on the width
    * of the notched element width and the RTL context.
    * @param {number} notchWidth Width of the size of the notch in the outline
    * @param {boolean=} isRtl Determines if outline is rtl
    */
  updateSvgPath(notchWidth, isRtl) {
    this.foundation_.updateSvgPath(notchWidth, isRtl);
  }

  /**
   * @return {!MDCNotchedOutlineFoundation}
   */
  getDefaultFoundation() {
    return new MDCNotchedOutlineFoundation({
      getWidth: () => this.root_.offsetWidth,
      getHeight: () => this.root_.offsetHeight,
      setOutlinePathAttr: (value) => {
        const path = this.root_.querySelector(strings.PATH_SELECTOR);
        path.setAttribute('d', value);
      },
      getIdleOutlineStyleValue: (propertyName) => {
        const idleOutlineElement = this.root_.parentNode.querySelector(strings.IDLE_OUTLINE_SELECTOR);
        if (idleOutlineElement) {
          return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
        }
      },
    });
  }
}

export {MDCNotchedOutline, MDCNotchedOutlineFoundation};
