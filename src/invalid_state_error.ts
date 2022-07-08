class InvalidStateError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "InvalidStateError";
  }
}

export { InvalidStateError };
