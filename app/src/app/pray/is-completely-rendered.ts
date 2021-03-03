import {  LiturgicalDocument, Liturgy, Option, Psalm } from '@venite/ldf';

export function isCompletelyCompiled(doc : LiturgicalDocument | undefined, recursionLevel : number = 0) : boolean {
  let isCompiled : boolean = false;
  if(doc == undefined || recursionLevel > 5 || (doc.condition == undefined && doc.hidden == false && (!doc.value || (Array.isArray(doc.value) && doc.value.length === 0)))) {
    //console.log('isCompletelyCompiled -- undefined', isCompiled, doc);
    isCompiled = true;
  } else if(doc?.type === 'liturgy') {
    isCompiled = ((doc as Liturgy).value || [])
      .map(subDoc => isCompletelyCompiled(subDoc, recursionLevel + 1))
      .reduce((a, b) => a && b, true);
    //console.log('isCompletelyCompiled — liturgy', isCompiled, doc)
  } else if(doc?.type === 'option') {
    isCompiled = isCompletelyCompiled(((doc as Option).value || [])[(doc as Option)?.metadata?.selected], recursionLevel + 1);
  } else if(doc?.type === 'meditation') {
    isCompiled = true;
  } else if(doc?.type === 'psalm' && doc?.metadata?.insert_seasonal_antiphon && !(doc as Psalm).metadata.antiphon) {
    isCompiled = false;
  } else {
    isCompiled = Boolean(doc?.value && doc?.value?.length > 0 && !JSON.stringify(doc.value).includes("Loading..."));
    /*if(!isCompiled) {
      console.log('isCompletelyCompiled', isCompiled, doc);
    }*/
  }

  return isCompiled;
}