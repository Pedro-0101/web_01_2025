import { Jogador } from "../model/Jogador";
import { JogadorRepository } from "../repository/jogadorRepository";


export class JogadorService {
    jogadorRepository = JogadorRepository.getInstance();

    insereJogador(jogador: any): Jogador {
        if (!jogador.nome || !jogador.cpf || !jogador.email || !jogador.telefone || !jogador.posicao) {
            throw new Error("Todos os campos são obrigatórios");
        }
        const novoJogador = new Jogador(jogador.nome, jogador.cpf, jogador.email, jogador.telefone, jogador.posicao);
        return this.jogadorRepository.insereJogador(novoJogador);
    }

    listaJogadores(): Jogador[] {
        return this.jogadorRepository.listaJogadores();
    }

}
