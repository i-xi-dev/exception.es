/**
 * The `InvalidStateError` represents an error when an object is in an invalid state.
 */
class InvalidStateError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "InvalidStateError";
  }
}

export { InvalidStateError };
