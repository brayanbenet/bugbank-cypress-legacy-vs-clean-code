import cadastroPage from "../../support/pages/cadastro.page"

describe("Cadastro BugBank - Refatorado", () => {
    it("Deve cadastrar um usuario com sucesso", () => {
        cadastroPage.acessarTelaDeCadastro()
        cadastroPage.preencherDadosDeCadastro()
        cadastroPage.clicarEmCadastrar()
        cadastroPage.validarContaCriadaComSucesso()
    })

    it.only("Deve cadastrar um usuario com saldo na conta", () => {
        cadastroPage.acessarTelaDeCadastro()
        cadastroPage.preencherDadosDeCadastro()
        cadastroPage.selecionarContaComSaldo()
        cadastroPage.clicarEmCadastrar()
        cadastroPage.validarContaCriadaComSucesso()
    })
})