const { dayOfTheWeek } = require('./app');
 
 const { monthsOfYear } = require('./app');
 
 test('getDay returns the long-format day of the week', () => {
     const day = dayOfTheWeek( new Date('3/11/2020') );
     expect( day ).toBe('Wednesday');
 });
 
test('getDay returns the month of year', () => {
    const month = monthsOfYear(new Date(2020, 10, 3)); // 10 = November (0-indexed)
    expect(month).toBe('November');
});