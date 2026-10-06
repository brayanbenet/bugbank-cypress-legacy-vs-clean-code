import cadastroPage from "../../support/pages/cadastro.page"
import loginPage from "../../support/pages/login.page"
import extratoPage from "../../support/pages/extrato.page"

describe("Extrato BugBank", () => {
    it("Deve validar o extrato de um usuario com saldo", () => {
        cadastroPage.realizarCadastroCompleto(true).then((contaOrigem) => {
            loginPage.realizarLoginComSucesso(contaOrigem)
            loginPage.validarTelaInicialLogado()
            loginPage.validarQueAContaTemSaldo("1.000,00")
            extratoPage.acessarExtrato()
            extratoPage.validarExtrato()
        })
    })
})