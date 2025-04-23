import {test} from '@playwright/test';

export class CartPage{
    constructor(page){
        this.page = page;

        this.updateButton = page.getByText('UPDATE');
        
        this.quantityField = page.locator('.ec_quantity');
        
        this.totalPriceLabel = page.getByText('$152.99');
    }

    async updateAmount(){
        await test.step('Обновить количество товара', async() => {
            await this.updateButton.click();
        });
    }

    async changeAmount(number){
        await test.step('Ввести новое количество товара в поле количества', async() => {
            await this.quantityField.fill(number);
        });
    }

    async checkTotalPrice(){
        await test.step('Проверить итоговую сумму заказа', async() => {
            await this.totalPriceLabel.click({ force: true });
        });
    }
}