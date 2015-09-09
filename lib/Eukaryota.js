import LivingThing from './LivingThing';
export default class Eukaryota extends LivingThing {

constructor (name, uniCellular, asexual, mobile, heterotroph) {
  super(name, uniCellular, true, false, asexual, mobile, heterotroph); // super must account for all parameters
  this._heterotroph = heterotroph; // new parameter must be defined

}
get heterotroph () {
  return this._heterotroph;
}
set heterotroph (het) {
  this._heterotroph = het;
}
get autotroph () {
  return !this._heterotroph;
}
set autotroph (auto) {
  this._heterotroph = !auto;
}
}

  // this._name = name;
  // this._uniCellular = UniCellular;
  // this._trueNucleus = trueNucleus;
  // this._anaerobic = anaerobic;
  // this._asexual = asexual;
  // this._mobile = mobile;