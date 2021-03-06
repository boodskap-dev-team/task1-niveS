
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

import { each } from 'zrender/esm/core/util';
import parseGeoJson from './parseGeoJson';
import { makeInner } from '../../util/model';
import fixNanhai from './fix/nanhai';
import fixTextCoord from './fix/textCoord';
import fixGeoCoord from './fix/geoCoord';
import fixDiaoyuIsland from './fix/diaoyuIsland';
var inner = makeInner();
export default {
  load: function (mapName, mapRecord, nameProperty) {
    var parsed = inner(mapRecord).parsed;

    if (parsed) {
      return parsed;
    }

    var specialAreas = mapRecord.specialAreas || {};
    var geoJSON = mapRecord.geoJSON;
    var regions;

    try {
      regions = geoJSON ? parseGeoJson(geoJSON, nameProperty) : [];
    } catch (e) {
      throw new Error('Invalid geoJson format\n' + e.message);
    }

    fixNanhai(mapName, regions);
    each(regions, function (region) {
      var regionName = region.name;
      fixTextCoord(mapName, region);
      fixGeoCoord(mapName, region);
      fixDiaoyuIsland(mapName, region);
      var specialArea = specialAreas[regionName];

      if (specialArea) {
        region.transformTo(specialArea.left, specialArea.top, specialArea.width, specialArea.height);
      }
    });
    return inner(mapRecord).parsed = {
      regions: regions,
      boundingRect: getBoundingRect(regions)
    };
  }
};

function getBoundingRect(regions) {
  var rect;

  for (var i = 0; i < regions.length; i++) {
    var regionRect = regions[i].getBoundingRect();
    rect = rect || regionRect.clone();
    rect.union(regionRect);
  }

  return rect;
}