describe('Создание новой потребности работодателем', () => {
    it('Позитивный тест: Создание новой потребности работодателем', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type="text"]').type('testerEmployer')
        cy.get('input[type="password"]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()
    })
})
