/**
 * [ERROR] 메시지를 정규화하고 에러를 던집니다.
 * - 예시: throwError("음수는 입력할 수 없습니다.");
 */
export function throwError(message) {
  let validatedMessage = '';
  if (message.startsWith('[ERROR]')) {
    validatedMessage = message;
  } else {
    validatedMessage = `[ERROR] ${message}`;
  }
  throw new Error(validatedMessage);
}
