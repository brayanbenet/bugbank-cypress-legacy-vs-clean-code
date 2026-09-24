import { faker } from "@faker-js/faker/locale/pt_BR"

export default class UsuarioFactory {
    static criarUsuarioValido(opcoes = {}) {
        return {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            senha: "Senha123!",
            confirmacaoSenha: "Senha123!",
            comSaldo: false,
            ...opcoes
        }
    }

    static criarUsuarioComSaldo() {
        return this.criarUsuarioValido({ comSaldo: true })
    }

    static criarUsuarioComEmailInvalido() {
        return this.criarUsuarioValido({ email: "email_invalido.com" })
    }

    static criarUsuarioComSenhasDiferentes() {
        return this.criarUsuarioValido({ confirmacaoSenha: "SenhaDiferente123!" })
    }
}