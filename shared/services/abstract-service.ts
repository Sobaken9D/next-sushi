import axios from "axios";

// создание абстрактного класса для других сервисов
// в данном случае он служит для обработки ошибок и хранения базлого URL (напр. /cart)

// abstract не позволяет создать через new
export abstract class AbstractService {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  protected handleError(error: unknown, actionName: string) {
    let errorMessage = error.message;

    // isAxiosError помогает понять ошибка случилась при http запросе или
    // это ошибка ReferenceError, TypeError и тд.
    if (axios.isAxiosError(error)) {
      if (error.response) {
      // либо ошибка в ответе response (тогда или 400 или 500)
        errorMessage += `${error.response.status} ${error.response.data?.message || 'Ошибка сервера'}`;
      } else if (error.request) {
        // либо ошибка в запросе request (тогда запрос не ушел и проблемы с сетью)
        errorMessage = "Сервер не отвечает. Проверьте соединение.";
      } else {
        errorMessage += error.message;
      }
    } else if (error instanceof Error) {
      // если ошибка типа TypeError и тд.
      errorMessage += error.message;
    }

    console.log(errorMessage);
    throw new Error(errorMessage);
  }
}