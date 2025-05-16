import { Request, Response } from "express";
import { JogadorService } from "../service/jogadorService";

const jogadorService = new JogadorService();

export function insereJogador(req: Request, res: Response) {
    try {
        const jogador = jogadorService.insereJogador(req.body);
        res.status(201).json(jogador);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export function listaJogadores(req: Request, res: Response) {
    try {
        const jogadores = jogadorService.listaJogadores();
        res.status(200).json(jogadores);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}