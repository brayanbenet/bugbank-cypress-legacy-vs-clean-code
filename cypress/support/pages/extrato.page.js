import BasePage from "./base.page"

class ExtratoPage extends BasePage {
    botaoExtrato = "#btn-EXTRATO"
    textoSaldoDisponivel = "#textBalanceAvailable"
    textoExtrato = "#textDescription"
    textoValorNoExtrato = "#textTransferValue"

    acessarExtrato() {
        this.clicar(this.botaoExtrato)
    }

    validarExtrato() {
        this.validarContemTextoNoElemento(this.textoSaldoDisponivel, "R$\u00a01.000,00")
        this.validarContemTextoNoElemento(this.textoExtrato, "Saldo adicionado ao abrir conta")
        this.validarContemTextoNoElemento(this.textoValorNoExtrato, "R$\u00a01.000,00")
    }
}

export default new ExtratoPage()