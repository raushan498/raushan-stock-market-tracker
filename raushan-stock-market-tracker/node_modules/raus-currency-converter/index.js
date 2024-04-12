import Freecurrencyapi from '@everapi/freecurrencyapi-js';
 
const freecurrencyapi = new Freecurrencyapi('fca_live_psKLTiiZMgusVfW1Be1YHG0oT4ePfGLg9K48x2fs');

export async function convertCurrency(fromCurrency,toCurrency,units){
const res=await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency

});
const multiplier=res.data[toCurrency];
return multiplier*units;
}