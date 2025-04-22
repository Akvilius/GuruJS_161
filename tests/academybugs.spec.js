import { expect , test} from '@playwright/test';
import { MainPage, ProductPage,  CartPage } from '../src/pages/index';
//import { test } from '../src/fixture/fixture';
//import { errors, messages } from '../src/data/messages';


test('@Bug Изменить количество отображаемых товаров на странице', async({ page }) => {
    test.slow();
    const mainPage = new MainPage(page);
    await mainPage.changeProductViewAmount();
    await mainPage.overlay.waitFor({ state: 'visible' });
    
    await test.step('Появляется оверлей с сообщением об ошибке', async() => {
        await expect(app.overlay).toContainText(errors.crushBug);
    });
});

/*
test('@Bug Отправить комментарий к товару только с обязательными полями', async({ app }) => {
    test.slow();
    await app.mainPage.goToProductPage();
    await app.productPage.postComment(app.comment.name, app.comment.email);
    await app.waitForOverlay();
    
    await test.step('Появляется оверлей с сообщением об ошибке', async() => {
        await expect(app.overlay).toContainText(errors.crushBug);
    });
});

test('@Bug Изменить отображение цен товаров в евро', async({ app }) => {
    test.slow();
    await app.mainPage.goToProductPage();
    await app.productPage.changeCurrencyEur();
    await app.waitForAnotherOverlay();

    await test.step('Появляется оверлей с сообщением об ошибке', async() => {
        //со стандартной ошибкой почему-то тест не проходит
        await expect(app.anotherOverlay).toContainText(errors.crushBugShort); 
    });
});

test('@Bug Перейти на детальную страницу товара в категории "hot item"', async({ app }) => {
    test.slow();
    await app.mainPage.goToProductPage();
    await app.productPage.goToHotItem();
    await app.waitForPopUp();
   
    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(app.popUp).toContainText(messages.bugPopUpMessage);
    });
});

test('@Bug Отфильтровать товары по ценовому диапазону "$15.00 - $19.99"', async({ app }) => {
    test.slow();
    await app.mainPage.goToProductPage();
    await app.productPage.filterPriceRange();
    await app.waitForPopUp();
 
    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(app.popUp).toContainText(messages.bugPopUpMessage);
    });
});

test('@Bug Перейти на страницу производителя товара', async({ app }) => {
    test.slow();
    await app.mainPage.goToProductPage();
    await app.productPage.goToManufacturer();
    await app.waitForPopUp();
   
    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(app.popUp).toContainText(messages.bugPopUpMessage);
    });
    
});

test('@Bug Увеличить количество товара в корзине больше чем на 1 единицу', async({ app }) => {
    test.slow();
    await app.mainPage.goToProductPage();
    await app.productPage.addToCart();
    await app.waitForCart();
    await app.cartPage.changeAmount('5');
    await app.cartPage.updateAmount();
    await app.waitForCongratsPopUp();

    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(app.congratsPopUp).toContainText(messages.firstCongrats);
    });

});

test('@Bug Проверить отображение итоговой цены заказа', async({ app }) => {
    test.slow();
    await app.mainPage.goToProductPage();
    await app.productPage.addToCart();
    await app.waitForCart();
    await app.cartPage.checkTotalPrice();
    await app.waitForPopUp();
  
    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(app.popUp).toContainText(messages.bugPopUpMessage);
    });
});

*/