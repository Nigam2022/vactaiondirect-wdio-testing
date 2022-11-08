import LoginPage from  '../pageobjects/login.page';
import BasePage from '../pageobjects/vacationsdirect/basePage';
import SecurePage from '../pageobjects/secure.page';
import HotelPage  from '../pageobjects/vacationsdirect/hotel.page'
import HotelApp from '../dsl/hotelApp';

describe('My Login application', () => {
    let hotelApp = new HotelApp();
    before(async () => {        
        await hotelApp.openURL();;
      });
    it('should navigate to hotel-tab', async () => {
        await hotelApp.navigateToHotelTab();
    });
    it('hotel-tab should be selected', async () => {
        const result = await hotelApp.isHotelTabSelected();
        console.log("hotel-tab-selected", result);
        expect(result).toBe("true");
    });
    it('hotel-destination should be entered with value', async () => {
        let testDestination = "North Las Vegas, NV, United States";
        await hotelApp.setHotelDestination(testDestination);
        let enteredDestination = await hotelApp.getHotelDestination();
        expect(enteredDestination).toBe(testDestination);
    });
    it('hotel-check-in should be entered with value', async () => {
        let testCheckIn = "11/13/22";
        await hotelApp.setHotelCheckIn(testCheckIn);
        let enteredCheckIn = await hotelApp.getHotelCheckIn();
        expect(enteredCheckIn).toBe(testCheckIn);
    });
    it('hotel-check-out should be entered with value', async () => {
        let testCheckOut = "11/19/22";
        await hotelApp.setHotelCheckOut(testCheckOut);
        let enteredCheckOut = await hotelApp.getHotelCheckOut();
        expect(enteredCheckOut).toBe(testCheckOut);
    });
    it('click on search', async () => {
        await hotelApp.clickSearch();
    });
    it('test', async() => {
        await hotelApp.getHotelResultsCount();
    })
    it('test-v1', async() => {
        await hotelApp.getDisplayedHotelResultsCount();
        await hotelApp.getHotelResultsCount();
    })
});


