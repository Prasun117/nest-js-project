class CustomException extends Error {
  constructor(message) {
    this.message = message;
    this.StatusCode = 500;
  }
  getErrorMessage() {
    return this.message;
  }
  getStatusCode() {
    return this.StatusCode;
  }
}

class LogDataUpdateError extends Error {
  constructor(message) {
    this.message = message;
    this.StatusCode = 500;
    this.ErrorType = "Error while updating the logs.";
  }
  getErrorMessage() {
    return this.message;
  }
  getStatusCode() {
    return this.StatusCode;
  }
}
