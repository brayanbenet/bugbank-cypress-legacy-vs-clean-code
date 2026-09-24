export default class BasePage {
    #obterElemento(seletor) {
        const eXpath = seletor.startsWith("/") || seletor.startsWith("(")
        return eXpath ? cy.xpath(seletor) : cy.get(seletor)
    }

    visitar(caminho = "") {
        cy.visit(caminho)
    }

    obterTituloDaPagina() {
        return cy.title()
    }

    clicar(elemento, opcoes = {}) {
        if (opcoes.force) {
            this.#obterElemento(elemento).click(opcoes)
        } else {
            this.#obterElemento(elemento).should("be.visible").click(opcoes)
        }
    }

    preencher(elemento, texto) {
        this.#obterElemento(elemento).should("be.visible").clear().type(texto)
    }

    obterTexto(elemento) {
        return this.#obterElemento(elemento).invoke("text")
    }

    validarUrlContem(palavraChave) {
        cy.url().should("include", palavraChave)
    }

    validarTextoDoElemento(elemento, textoEsperado) {
        this.#obterElemento(elemento).should("be.visible").and("have.text", textoEsperado)
    }

    validarContemTextoNoElemento(elemento, textoEsperado) {
        this.#obterElemento(elemento).should("be.visible").and("contain.text", textoEsperado)
    }

    aguardarElemento(elemento, tempoLimite = 10000) {
        this.#obterElemento(elemento, { timeout: tempoLimite }).should("be.visible")
    }
}
