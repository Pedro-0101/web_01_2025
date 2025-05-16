import { Jogador } from "../model/Jogador";

export class JogadorRepository {
    private static instance: JogadorRepository;
    private jogadores: Jogador[] = [];  

    private constructor() {};

    public static getInstance(): JogadorRepository {
        if (!JogadorRepository.instance) {
            JogadorRepository.instance = new JogadorRepository();
        }
        return JogadorRepository.instance;
    }

    insereJogador(jogador: Jogador): Jogador {
        this.jogadores.push(jogador);
        return jogador;
    }

    listaJogadores(): Jogador[] {
        return this.jogadores;
    }

    buscaJogadorPorId(id: number): Jogador | undefined {
        return this.jogadores.find(jogador => jogador.id === id);
    }
}