import BasePage from "./base.page"
import UsuarioFactory from "../factories/usuario.factory"

class CadastroPage extends BasePage {
    botaoRegistrar = ".ihdmxA"
    inputEmail = ":nth-child(2) > [name='email']"
    inputNome = "[name='name']"
    inputSenha = ":nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name='password']"
    inputConfirmacaoSenha = "[name='passwordConfirmation']"
    botaoCriarContaComSaldo = "#toggleAddBalance"
    botaoCadastrar = ".styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0"
    textoContaCriadaComSucesso = "#modalText"
    botaoFecharModalDeSucesso = "#btnCloseModal"

    acessarTelaDeCadastro() {
        this.visitar("/")
        this.clicar(this.botaoRegistrar)
    }

    preencherDadosDeCadastro() {
        const usuario = UsuarioFactory.criarUsuarioValido()
        this.preencherEmail(usuario.email)
        this.preencherNome(usuario.nome)
        this.preencherSenha(usuario.senha)
        this.preencherConfirmacaoDeSenha(usuario.senha)
    }

    selecionarContaComSaldo() {
        this.clicar(this.botaoCriarContaComSaldo, {force:true})
    }

    clicarEmCadastrar() {
        this.clicar(this.botaoCadastrar)
    }

    preencherEmail(email) {
        this.preencher(this.inputEmail, email)
    }

    preencherNome(nome) {
        this.preencher(this.inputNome, nome)
    }

    preencherSenha(senha) {
        this.preencher(this.inputSenha, senha)
    }

    preencherConfirmacaoDeSenha(senha) {
        this.preencher(this.inputConfirmacaoSenha, senha)
    }

    validarContaCriadaComSucesso() {
        this.validarContemTextoNoElemento(this.textoContaCriadaComSucesso, "foi criada com sucesso")
        this.clicar(this.botaoFecharModalDeSucesso)
    }
}

export default new CadastroPage()