export default class LivingThing {

constructor (name, UniCellular, trueNucleus, anaerobic, asexual, mobile) {
  this._name = name;
  this._uniCellular = UniCellular;
  this._trueNucleus = trueNucleus;
  this._anaerobic = anaerobic;
  this._asexual = asexual;
  this._mobile = mobile;
}
get name () {
  return this._name;
}
set name ( n ) {
  this._name = n;
}

get uniCellular () {
  return this._uniCellular;
}
set uniCellular (Uni) {
  this._uniCellular = Uni;
}

get multiCellular () {
  return !this._uniCellular;
}
set multiCellular (Mult) {
  this._uniCellular = !Mult;
}

get eukaryote () {
  return this._trueNucleus;
}
set eukaryote (Nucl) {
  this._trueNucleus = Nucl;
}

get prokaryote () {
  return !this._trueNucleus;
}
set prokaryote (Prok) {
  this._trueNucleus = !Prok;
}

get anaerobic () {
  return this._anaerobic;
}
set anaerobic (Anarobe) {
  this._anaerobic = Anarobe;
}

get aerobic () {
  return !this._anaerobic;
}
set aerobic (Arobe) {
  this._anaerobic = !Arobe;
}

get asexual () {
  return this._asexual;
}
set asexual (Asex) {
  this._asexual = Asex;
}

get sexual () {
  return !this._asexual;
}
set sexual (Sex) {
  this._asexual = !Sex;
}

get mobile () {
  return this._mobile;
}

get immobile () {
  return this._mobile;
}
}