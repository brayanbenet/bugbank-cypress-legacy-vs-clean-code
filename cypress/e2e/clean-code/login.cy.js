import cadastroPage from "../../support/pages/cadastro.page"
import loginPage from "../../support/pages/login.page"

describe("Login BugBank - Legacy", () => {
    it("Deve fazer login com sucesso", () => {
        cadastroPage.realizarCadastroCompleto().then((usuario) => {
            loginPage.preencherEmail(usuario.email)
            loginPage.preencherSenha(usuario.senha)
            loginPage.clicarEmAcessar()
            loginPage.validarTelaInicialLogado()
        })
    })

    it("Deve fazer login com senha inválida", () => {
        cadastroPage.realizarCadastroCompleto().then((usuario) => {
            loginPage.preencherEmail(usuario.email)
            loginPage.preencherSenha(usuario.senhaDiferente)
            loginPage.clicarEmAcessar()
            loginPage.validarPopUpUsuarioInvalido()
        })
    })
})