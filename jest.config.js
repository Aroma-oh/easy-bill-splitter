module.exports = {
  verbose: true,
  preset: "ts-jest",
  testMatch: ["**/*.spec.[jt]s?(x)", "**/*.test.[jt]s?(x)"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(react-bootstrap-tagsinput))"],
};