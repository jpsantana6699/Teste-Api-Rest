import { describe, expect } from "@jest/globals";
import AuthService from "../../services/authService";

const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuario deve possuir um nome, email e senha', async() => {
      const usuarioMock = {
          nome: "Raphael",
          email: "raphael@teste.com.br",
      }

      const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

      await expect(usuarioSalvo).rejects.toThrowError('A senha do usuario é obrigatório!');
    });
});