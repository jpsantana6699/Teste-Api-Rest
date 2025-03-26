import { describe } from "@jest/globals";
import AluguelLivroService from "../../services/aluguelLivroService";

const aluguelLivroService = new AluguelLivroService();

describe('Testando AlguelLivroService', () => {
  it('Retornar a data de devolução do livro validando a quantidade de dias alugado', async () => {
    const dataAlugado = new Date('2025-01-01');
    const numeroDiasAlugas = 5;
    const dataDevolucaoMock = new Date('2025-01-06');

    const dataDevolucao = await aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugas);

    expect(dataDevolucao).toStrictEqual(dataDevolucaoMock);
  
  });
});