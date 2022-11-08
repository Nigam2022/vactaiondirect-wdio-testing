import BasePage from "./basePage";
export class LandingPage extends BasePage {

    private async getHotelTabElement() { return await $('li[data-tab=Hotel]'); }

    async clickOnHotelTab() {
        let hotelTabElement = await this.getHotelTabElement();
        await hotelTabElement.waitForEnabled();
        await hotelTabElement.click();
        console.log("hotel-tab-element", await hotelTabElement);
    }

    async isHotelTabSelected() {
        let hotelTabElement = await this.getHotelTabElement();
        let result = await (await hotelTabElement.getAttribute("aria-selected"));
        console.log("landing-page", "hotel-tab-selected", result);
        return result;
    }
}

