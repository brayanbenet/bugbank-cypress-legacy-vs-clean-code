import cadastroPage from "../../support/pages/cadastro.page"
import loginPage from "../../support/pages/login.page"
import transferenciaPage from "../../support/pages/transferencia.page"

describe("Transferência BugBank", () => {
    it("Deve validar a transferência de uma conta para outra", () => {
        const valorTransferencia = "500"
        cadastroPage.realizarCadastroCompleto(false).then((contaDestino) => {
            cadastroPage.realizarCadastroCompleto(true).then((contaOrigem) => {
                loginPage.realizarLoginComSucesso(contaOrigem)
                loginPage.validarTelaInicialLogado()
                loginPage.validarQueAContaTemSaldo("1.000,00")
                transferenciaPage.acessarTransferencia()
                transferenciaPage.preencherDadosDeTransferencia(contaDestino.numeroConta, contaDestino.digitoConta, valorTransferencia)
                transferenciaPage.clicarTransferir()
                transferenciaPage.validarTransferenciaComSucesso()
                loginPage.realizarLoginComSucesso(contaDestino)
                loginPage.validarQueAContaTemSaldo(valorTransferencia)
            })
        })
    })
})