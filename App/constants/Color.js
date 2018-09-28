const setNormalizedColorAlpha = require('setNormalizedColorAlpha');
const processColor            = require('processColor');
const normalizeColor          = require('normalizeColor');

const opacity = function(color, opacityValue) {
  return setNormalizedColorAlpha(normalizeColor(color), opacityValue);
}

const Color = {
  // General
  primary:         '#39437C',
  primaryDark:     '#333C76',
  primaryDarker:   '#283165',
  primaryLight:    '#969EBD',
  primaryLighter:  '#F0F2F6',
  primaryLightest: '#E2E3EB',
  action:          '#FFF488',
  actionHover:     '#FFF6A5',
  danger:          '#F8514D',
  black:           '#4A4A4A',
  blue:            '#4D93FF',

  // Functions
  opacity: opacity,
  process: processColor
};

export default Color;
