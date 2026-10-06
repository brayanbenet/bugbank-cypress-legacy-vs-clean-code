import BasePage from "./base.page"

class TransferenciaPage extends BasePage {
    botaoAcessarTransferencia = "#btn-TRANSFERÊNCIA"
    textoTelaInicial = ".transfer__TextInformation-sc-1yjpf2r-7"
    inputNumeroDaConta = "[name='accountNumber']"
    inputDigitoDaConta = "[name='digit']"
    inputValorDeTransferencia = "[name='transferValue']"
    inputDescricao = "[name='description']"
    botaoTransferir = ".style__ContainerButton-sc-1wsixal-0"
    textoTransferenciaComSucesso = "#modalText"

    acessarTransferencia() {
        this.clicar(this.botaoAcessarTransferencia)
        this.validarContemTextoNoElemento(this.textoTelaInicial, "Realize transferência de valores entre contas BugBank com taxa 0 e em poucos segundos.")
    }

    preencherDadosDeTransferencia(numero, digito, valorTransferencia) {
        this.preencher(this.inputNumeroDaConta, numero)
        this.preencher(this.inputDigitoDaConta, digito)
        this.preencher(this.inputValorDeTransferencia, valorTransferencia)
        this.preencher(this.inputDescricao, "Transferência Teste")
    }

    clicarTransferir() {
        this.clicar(this.botaoTransferir)
    }

    validarTransferenciaComSucesso() {
        this.validarTextoDoElemento(this.textoTransferenciaComSucesso, "Transferencia realizada com sucesso")
    }

    validarTransferenciaNaOutraConta() {

    }
}

export default new TransferenciaPage()