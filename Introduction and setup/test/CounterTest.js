import Counter from '../src/Counter';

describe('Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new Counter();
  });

  it('initially has count 0', () => {
    expect(counter.getCount()).to.eq(0);
  });

  it('has count 1 when increased', () => {
    counter.increase();
    expect(counter.getCount()).to.eq(1);
  });
});
