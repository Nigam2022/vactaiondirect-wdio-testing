import BasePage from "./basePage";

class HotelPage extends BasePage {

    protected async getDestinationElement() { return await $('input[name="Destination"]'); }
    protected async getCheckInElement() { return await $('input[name="CheckIn"]'); }
    protected async getCheckOutElement() { return await $('input[name="CheckOut"]'); }
    protected async getSearchElement() { return await $('button[value="Search"]'); }


    public async setDestination(destination : string) {
        let destinationElement = await this.getDestinationElement();
        await destinationElement.setValue(destination);
    }

    public async getDestination() {
        let destinationElement = await this.getDestinationElement();
        let enteredDestination = await destinationElement.getValue();
        console.log("entered-destination", enteredDestination);
        return enteredDestination;
    }

    public async setCheckIn(date: string) {
        let checkInElement = await this.getCheckInElement();
        await checkInElement.setValue(date);
    }

    public async getCheckIn() {
        let checkInElement = await this.getCheckInElement();
        let enteredCheckIn = await checkInElement.getValue();
        console.log("entered-check-in", enteredCheckIn);
        return enteredCheckIn;
    }

    public async setCheckOut(date: string) {
        let checkOutElement = await this.getCheckOutElement();
        await checkOutElement.setValue(date);
    }

    public async getCheckOut() {
        let checkOutElement = await this.getCheckOutElement();
        let enteredCheckOut = await checkOutElement.getValue();
        console.log("entered-check-out", enteredCheckOut);
        return enteredCheckOut;
    }

    public async clickSearch() {
        let searchElement = await this.getSearchElement();
        await searchElement.click();
    }
}

export default HotelPage;