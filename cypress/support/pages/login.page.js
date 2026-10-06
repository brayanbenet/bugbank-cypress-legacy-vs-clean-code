import BasePage from "./base.page"

class LoginPage extends BasePage {
    inputEmail = ":nth-child(1) > [name='email']"
    inputSenha = ".style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name='password']"
    botaoAcessar = ".otUnI"
    textoBemVindo = ".home__ContainerText-sc-1auj767-7 > :nth-child(2)"
    textoUsuarioInvalido = "#modalText"
    textoSaldoTelaInicial = "#textBalance > span"

    realizarLoginComSucesso(usuario) {
        this.visitar("/")
        this.preencherEmail(usuario.email)
        this.preencherSenha(usuario.senha)
        this.clicarEmAcessar()
    }

    validarTelaInicialLogado() {
        this.validarTextoDoElemento(this.textoBemVindo, "bem vindo ao BugBank :)")
    }

    preencherEmail(email) {
        this.preencher(this.inputEmail, email)
    }

    preencherSenha(senha) {
        this.preencher(this.inputSenha, senha)
    }

    clicarEmAcessar() {
        this.clicar(this.botaoAcessar)
    }

    validarPopUpUsuarioInvalido() {
        this.validarContemTextoNoElemento(this.textoUsuarioInvalido, "Usuário ou senha inválido.\nTente novamente ou verifique suas informações!")
    }

    validarQueAContaTemSaldo(saldo) {
        this.validarContemTextoNoElemento(this.textoSaldoTelaInicial, `R$\u00a0${saldo}`)
    }
}

export default new LoginPage()