/**
 * The `TimeoutError` represents an error when an operation timed out.
 */
class TimeoutError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "TimeoutError";
  }
}

export { TimeoutError };
