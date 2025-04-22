import {test} from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;
        
        this.productViewAmountLink = page.getByRole('link', { name : '10' });
        
        this.product = page.getByRole('link', { name: 'DNK Yellow Shoes'}).first();
    }


    async changeProductViewAmount(){
        await test.step('Изменить количество отображаемых товаров на странице', async() => {
            await this.productViewAmountLink.click();
        });
    }

    async goToProductPage(){
        await test.step('Перейти на детальную страницу товара', async() => {
            await this.product.waitFor({ state: 'visible' });
            await this.product.click();
        });
    }

}