import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Get full year', function () {
  it('should return the correct year value', function () {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('Get footer text', function () {
  const trueText = 'Holberton School';
  const falseText = 'Holberton School main dashboard';
  it('should return the true text', function () {
    const currentText = getFooterCopy(true);
    expect(currentText).toBe(trueText);
  });
  it('should return the false footer text', function () {
    const currentText = getFooterCopy(false);
    expect(currentText).toBe(falseText);
  });
});

describe('Get latest notifications', function () {
  it('should return the urgent notification message', function () {
    const message = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(message).toBe(getLatestNotification());
  });
});
