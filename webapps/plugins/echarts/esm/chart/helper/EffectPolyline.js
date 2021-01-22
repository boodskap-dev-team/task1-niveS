
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

import { __extends } from "tslib";
import Polyline from './Polyline';
import EffectLine from './EffectLine';
import * as vec2 from 'zrender/esm/core/vector';

var EffectPolyline = function (_super) {
  __extends(EffectPolyline, _super);

  function EffectPolyline() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._lastFrame = 0;
    _this._lastFramePercent = 0;
    return _this;
  }

  EffectPolyline.prototype.createLine = function (lineData, idx, seriesScope) {
    return new Polyline(lineData, idx, seriesScope);
  };

  ;

  EffectPolyline.prototype._updateAnimationPoints = function (symbol, points) {
    this._points = points;
    var accLenArr = [0];
    var len = 0;

    for (var i = 1; i < points.length; i++) {
      var p1 = points[i - 1];
      var p2 = points[i];
      len += vec2.dist(p1, p2);
      accLenArr.push(len);
    }

    if (len === 0) {
      this._length = 0;
      return;
    }

    for (var i = 0; i < accLenArr.length; i++) {
      accLenArr[i] /= len;
    }

    this._offsets = accLenArr;
    this._length = len;
  };

  ;

  EffectPolyline.prototype._getLineLength = function () {
    return this._length;
  };

  ;

  EffectPolyline.prototype._updateSymbolPosition = function (symbol) {
    var t = symbol.__t;
    var points = this._points;
    var offsets = this._offsets;
    var len = points.length;

    if (!offsets) {
      return;
    }

    var lastFrame = this._lastFrame;
    var frame;

    if (t < this._lastFramePercent) {
      var start = Math.min(lastFrame + 1, len - 1);

      for (frame = start; frame >= 0; frame--) {
        if (offsets[frame] <= t) {
          break;
        }
      }

      frame = Math.min(frame, len - 2);
    } else {
      for (frame = lastFrame; frame < len; frame++) {
        if (offsets[frame] > t) {
          break;
        }
      }

      frame = Math.min(frame - 1, len - 2);
    }

    var p = (t - offsets[frame]) / (offsets[frame + 1] - offsets[frame]);
    var p0 = points[frame];
    var p1 = points[frame + 1];
    symbol.x = p0[0] * (1 - p) + p * p1[0];
    symbol.y = p0[1] * (1 - p) + p * p1[1];
    var tx = p1[0] - p0[0];
    var ty = p1[1] - p0[1];
    symbol.rotation = -Math.atan2(ty, tx) - Math.PI / 2;
    this._lastFrame = frame;
    this._lastFramePercent = t;
    symbol.ignore = false;
  };

  ;
  return EffectPolyline;
}(EffectLine);

export default EffectPolyline;