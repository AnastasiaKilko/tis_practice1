describe('Cмена статуса рабочего пространства', () => {
    it('Cмена статуса рабочего пространства', () => {

        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('testerEmployer')
        cy.get('input[type=password]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()

        cy.get(':nth-child(5) > .menu-item__item-name').should('be.visible').click();
        cy.get('section.responses-page').find('.responses-page__menu nav > div > div:nth-child(3) > span.navigation-item__title').should('be.visible').click();
        // Кликаем по кнопке внутри первого отклика
        cy.get('section.responses-page article').first().find('button').should('be.visible').click();

        // Шаг 5: Смена статуса рабочего пространства
        cy.get('div.status-open__buttons > button:nth-child(1)') // Выбираем первую кнопку для смены статуса
            .should('be.visible').click(); // Кликаем для изменения статуса

    })
})