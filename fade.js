// data de entrega do projeto
let data_de_entrega = new Date('2019-02-12');
// quantidade de dias que ficará inalterado
let dias_normais = 10;
// quantidade de dias até ficar totalmente transparente
let expira_em_dias = 60;


/**
 * Não modificar linhas abaixo
 */

let now = new Date();
let diff = new Date(now.getTime() - data_de_entrega.getTime())
let diff_in_days = diff.getMonth()*30 + diff.getDate()

var alfa = 1;
if(diff_in_days > dias_normais){
    expira_em_dias -= dias_normais
    alfa -= diff_in_days/expira_em_dias
}

document.querySelector('body').style.opacity = alfa;


