'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrs = sourceString.split(';');

  for (let i = 0; i < arrs.length; i++) {
    const ar = arrs[i].trim();

    if (ar === '') {
      continue;
    }

    const index = ar.indexOf(':');

    if (index === -1) {
      continue;
    }

    const key = ar.slice(0, index).trim();
    const value = ar.slice(index + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
