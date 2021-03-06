var syntax = [
  'Supports standard dice notation, as well as some extended functionality.',
  'syntax: <roll>[<operator><roll><operator><roll>...][<operator><constant>]',
  'roll: [<number of dice>]d<number of sides>[<modifiers>]',
  '      default number of dice: 1',
  'operator: + or -',
  'constant: any integer',
  'modifiers:',
  '  d<number> - drop the lowest X rolls from this group',
  '  k<number> - keep the highest X rolls from this group',
  '  h - alter either d or k modifier to affect the highest rolls, e.g. dh3: drop the highest 3 rolls',
  '  l - alter either d or k modifier to affect the lowest rolls, e.g. kl2: keep the lowest 2 rolls',
  '  r - reroll based on certain rules',
  '    r4 - reroll all 4s',
  '    r<3 - reroll anything less than 3',
  '    r>=11 - reroll anything greater than or equal to 11',
  'modifiers can be combined, but d and k are mutually exclusive'
].join('\n');

var specialData = {
  barrel: 'Donkey Kong rolls a barrel down the ramp and crushes you. -1000pts',
  rick: 'No.',
  katamari: 'Na naaaaa, na na na na na na, na na Katamari Damacy....',
  help: syntax,
  syntax: syntax
}

function SpecialFunctions(){
  this.getSpecial = function(expression){
    if(expression && specialData.hasOwnProperty(expression)){
      return specialData[expression];
    }
    return null;
  }
}

module.exports = new SpecialFunctions();