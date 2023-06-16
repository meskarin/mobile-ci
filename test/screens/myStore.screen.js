class MyStoreScreen {
    get #myStoreLogo(){
        return $('~Minha loja')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreName(){
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed(){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
    }
}

module.exports = new MyStoreScreen()