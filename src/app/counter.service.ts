export class CounterService{
    toInactiveCounter = 0;
    toActiveCounter = 0;

    incrementToInactive() {
    this.toInactiveCounter++;
    console.log('From active to inactive: ' + this.toInactiveCounter);
    }

    incrementToActive() {
    this.toActiveCounter++;
    console.log('From inactive to active: ' + this.toActiveCounter);
    }
}