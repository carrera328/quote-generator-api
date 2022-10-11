class RequestError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.message = message;
    }
}

class QueryError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
      }
}

module.exports = {
    RequestError,
    QueryError
  };