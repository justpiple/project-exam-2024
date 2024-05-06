export function Success(message: string, otherResponses?: Object) {
  return { message, status: true, ...otherResponses };
}

export function CreatedSuccessfully(message: string, otherResponses?: Object) {
  return { status: 201, message, success: true, ...otherResponses };
}

export function InternalServerError(message?: string) {
  return {
    message: message || "Internal server error",
    status: false,
  };
}

export function Forbidden(message: string) {
  return { message, status: false };
}

export function Unauthorize(message: string) {
  return { message, status: false };
}

export function BadRequest(message: string) {
  return { message, status: false };
}

export function NotFound(message: string) {
  return { message, status: false };
}
