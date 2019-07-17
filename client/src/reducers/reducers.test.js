import reducers from './index';


describe('reducers', () => {

  const list = reducers(undefined, {});

  it('should contain config reducer', function () {
    expect(list).toHaveProperty('config');
  });

  it('should contain skills reducer', function () {
    expect(list).toHaveProperty('skills');
  });

  it('should contain certificates reducer', function () {
    expect(list).toHaveProperty('certificates');
  });

  it('should contain works reducer', function () {
    expect(list).toHaveProperty('works');
  });

  it('should contain contact reducer', function () {
    expect(list).toHaveProperty('contact');
  });

  it('should contain benefits reducer', function () {
    expect(list).toHaveProperty('benefits');
  });

  it('should contain interest reducer', function () {
    expect(list).toHaveProperty('interest');
  });

  it('should contain categories reducer', function () {
    expect(list).toHaveProperty('categories');
  });

  it('should contain work reducer', function () {
    expect(list).toHaveProperty('work');
  });
});
