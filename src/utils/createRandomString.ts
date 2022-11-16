const createRandomString = (): string =>
  Math.random().toString(32).substring(2);

export default createRandomString;
