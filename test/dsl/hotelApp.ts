
import  HotelPage  from '../pageobjects/vacationsdirect/hotel.page';
import { HotelResultsPage } from '../pageobjects/vacationsdirect/hotelResults.page';
import { LandingPage } from '../pageobjects/vacationsdirect/landing.page';


export default class HotelApp {
    public static CONTAINER_ID = Symbol.for('MobileMyTripsSiteApp');

    protected hotelPage = new HotelPage();
    protected hotelresultPage = new HotelResultsPage();
    protected landingPage = new LandingPage();

    async openURL() {
        await this.hotelPage.open();
    }

    async navigateToHotelTab() {
        await this.landingPage.clickOnHotelTab();
    }

    async isHotelTabSelected() {
        return await this.landingPage.isHotelTabSelected();
    }

    async setHotelDestination(destination: string) {
        await this.hotelPage.setDestination(destination);
    }

    async getHotelDestination() {
        return await this.hotelPage.getDestination();
    }

    async setHotelCheckIn(date: string) {
        await this.hotelPage.setCheckIn(date);
    }

    async getHotelCheckIn() {
        return await this.hotelPage.getCheckIn();
    }

    async setHotelCheckOut(date: string) {
        await this.hotelPage.setCheckOut(date);
    }

    async getHotelCheckOut() {
        return await this.hotelPage.getCheckOut();
    }

    async clickSearch() {
        return await this.hotelPage.clickSearch();
    }

    async getDisplayedHotelResultsCount() {
        await this.hotelresultPage.getDisplayedHotelResultsCount();
    }

    async getHotelResultsCount() {
        await this.hotelresultPage.getHotelResultsCount();
    }
}
