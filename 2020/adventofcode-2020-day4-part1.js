// Run this from the browser console right on the input page!
const input     = document.body.textContent;
const passports = input.split("\n\n");

const MINIMUM_FIELD_COUNT = 7;

const filterOutCidField = (({cid, ...otherFields}) =>
  ({...otherFields})
);

const hasAllFields = passport =>
  Object.entries(passport)
  //.filter(([field, value]) => field != 'cid')
  .filter(([field, value]) => 
    value.trim() != "").length == MINIMUM_FIELD_COUNT;

const isValidPassport = passport => hasAllFields(passport); //TODO

passports.map(passport =>
  Object.fromEntries(
    passport
      .split(/\s/g)
      .map(field => field.split(':'))
  )
).filter(isValidPassport);
