import BasePage from "./basePage";

export class HotelResultsPage extends BasePage {

    protected async getHotelResultsCountElement() { return await $('h2[class=hotel-results-pagination-count-header]'); }
    protected async getNextElement() {return await $('button=Next')}
    protected async getHotelResults() { return await $$('li[class=js-hotel-result]')}
    async getDisplayedHotelResultsCount() {
        let hotelResultCountElement = await this.getHotelResultsCountElement();
        let innerText = await (await hotelResultCountElement.getText()).toString();
        console.log("hotel-results-count", "inner-text", innerText);
        let hotelCount = innerText.split(" ")[5];
        console.log("hotel-count", hotelCount);
        return hotelCount;
    }
    async getHotelResultsCountInSinglePage() {
        let count = (await this.getHotelResults()).length;
        return count;
    }
    async getHotelResultsCount() {
        return await this.goTillLastPage();
    }
    async goTillLastPage() {
        let hotelCount = 0;
        for (let nextElement = await this.getNextElement(); (nextElement.error) ?.message == undefined; nextElement = await this.getNextElement()) {
            browser.waitUntil(() => browser.isLoading());
            hotelCount += await this.getHotelResultsCountInSinglePage();
            await nextElement.click();
            console.log("next-element", nextElement);
        }
        console.log("hotel-count", "in-all-pages", hotelCount);
        return hotelCount;
    }
}
