import {
  ForeignKeyConstraintError,
  UniqueConstraintError,
  ValidationError,
} from "sequelize";

export class StatusError extends Error {
  status: number = 500;
  message: string = "Unknown error has occurred";
  code: number = 0;

  constructor(error?: Error) {
    super();

    switch (error.constructor) {
      case UniqueConstraintError:
        this.handleUniqueConstraintError(error);
        break;

      case ForeignKeyConstraintError:
        this.handleForeignKeyConstraintError(error);
        break;

      case ValidationError:
        this.handleValidationError(error);
        break;

      default:
        break;
    }
  }

  handleUniqueConstraintError(error: Error) {
    this.status = 409;
    this.message = "Primary Key duplicate";
    this.code = 1;
  }

  handleForeignKeyConstraintError(error: Error) {
    this.status = 422;
    this.message = "Foreign Key constraint error";
    this.code = 2;
  }

  handleValidationError(error: Error) {
    switch (error.message) {
      case "Primary Key not found when deleting entity":
        this.status = 400;
        this.message = error.message;
        this.code = 3;
        break;
      case "Username or password is incorrect":
        this.status = 400;
        this.message = error.message;
        this.code = 4;
        break;
      case "Primary Key not found when getting entity":
        this.status = 400;
        this.message = error.message;
        this.code = 5;
        break;
    }
  }
}
