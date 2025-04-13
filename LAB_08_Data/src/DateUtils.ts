export class DateUtils {

    formatarData(data: Date, formato: string): string{

        // Componentes da data
        const ano = data.getFullYear().toString();
        const mes = (data.getMonth()+1).toString().padStart(2, '0');
        const dia = data.getDate().toString().padStart(2, '0');

        // Componentes das horas
        const diaSemana = data.getDay().toString();
        const hora = data.getHours().toString().padStart(2, '0');
        const min = data.getMinutes().toString().padStart(2, '0');
        const sec = data.getSeconds().toString().padStart(2, '0');
        const ms = data.getMilliseconds().toString().padStart(2, '0');
        
        let retorno: string = formato;

        retorno = retorno.replaceAll('dd', dia);
        retorno = retorno.replaceAll('mm', mes);
        if(formato.includes('aaaa')) {
            retorno = retorno.replaceAll('aaaa', ano);
        }
        else {
            retorno = retorno.replaceAll('aa', ano.slice(2, 4));
        }

        retorno = retorno.replaceAll('h', hora);
        retorno = retorno.replaceAll('m', min);
        retorno = retorno.replaceAll('s', sec);

        return retorno;
    }

}

const dateUtils = new DateUtils;

console.log(dateUtils.formatarData(new Date(), "dd/mm/aaaa h:m:s"));