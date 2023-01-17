import 'mocha';
import { expect } from 'chai';
import { ConsoleNotification, ReadingTracker } from '../../exercises';

describe('Test da classe ReadingTracker', function () {
  it('', function () {
    const readTracker = new ReadingTracker(20, new ConsoleNotification('test1'));
    expect(readTracker.trackReadings(5)).to.be.equal(undefined);
  });
});
