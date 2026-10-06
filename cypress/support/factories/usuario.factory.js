import { faker } from "@faker-js/faker/locale/pt_BR"

export default class UsuarioFactory {
    
    static criarUsuarioValido(opcoes = {}) {
        return {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            senha: "Senha123!",
            confirmacaoSenha: "Senha123!",
            senhaDiferente: "SenhaDiferente123!",
            comSaldo: false,
            ...opcoes
        }
    }
}