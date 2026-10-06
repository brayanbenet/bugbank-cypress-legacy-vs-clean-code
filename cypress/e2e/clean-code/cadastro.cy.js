import cadastroPage from "../../support/pages/cadastro.page"

describe("Cadastro BugBank - Refatorado", () => {
    it("Deve cadastrar um usuario com sucesso", () => {
        cadastroPage.acessarTelaDeCadastro()
        cadastroPage.preencherDadosDeCadastroValido()
        cadastroPage.clicarEmCadastrar()
        cadastroPage.fecharModalSucesso()
    })

    it("Deve cadastrar um usuario com saldo na conta", () => {
        cadastroPage.acessarTelaDeCadastro()
        cadastroPage.preencherDadosDeCadastroValido()
        cadastroPage.selecionarContaComSaldo()
        cadastroPage.clicarEmCadastrar()
        cadastroPage.fecharModalSucesso()
    })
})