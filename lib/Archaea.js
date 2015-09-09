import LivingThing from './LivingThing';
export default class Archaea extends LivingThing {


constructor (name) { //only parameter that is changed is entered into constructor
  super(name, true, false, true, true, false); //order stays same from super
  this._name = name;

}

}

// uniCellular = true
// trueNucleus = false
// anaerobic = true
// asexual = true
// mobile = false