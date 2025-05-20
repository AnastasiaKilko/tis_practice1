describe('Взаимодействие внутри рабочего пространства', () => {
    it('Взаимодействие внутри рабочего пространства', () => {

        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('testerEmployer')
        cy.get('input[type=password]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()

        cy.get(':nth-child(5) > .menu-item__item-name').should('be.visible').click();
        cy.get('section.responses-page').find('.responses-page__menu nav > div > div:nth-child(3) > span.navigation-item__title').should('be.visible').click();
        // Кликаем по кнопке внутри первого отклика
        cy.get('section.responses-page article').first().find('button').should('be.visible').click();

        cy.get('.comment-textarea__textarea textarea', { timeout: 10000 }).should('be.visible').type('Мне очень нравится Ваша работа!');
        cy.get('div.comment-textarea__buttons > button:nth-child(2)').should('be.visible').click();
    })
})