'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString.split(';');

  for (const rule of rules) {
    if (!rule.trim()) {
      continue;
    }

    const index = rule.indexOf(':');

    if (index === -1) {
      continue;
    }

    const property = rule.slice(0, index).trim();
    const value = rule.slice(index + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
