const API_URL = 'https://PRINCIPAL.raw.icp0.io';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * @description Sends a request to the API
 * @param method the HTTP method to use
 * @param path the path to the API endpoint
 * @param mock a mock to return in case of no API URL
 * @param onError a callback to call in case of an error
 * @returns
 */
const sendJsonRequest = async <T>(
  method: Method,
  path: string,
  mock: T,
  onError?: (statusCode: number, error: any) => void,
): Promise<T> => __sendJsonRequest(method, path, mock, undefined, onError);

const __sendJsonRequest = async <T>(
  method: Method,
  path: string,
  mock: T,
  body?: any,
  onError?: (statusCode: number, error: any) => void,
): Promise<T> => {
  const development = process.env.NODE_ENV === 'development';
  if (development) {
    console.log('MOCK', method, path);
    // simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mock;
  }

  let url = `${API_URL}${path}`;
  if (path.startsWith('http')) {
    url = path;
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    body: body !== undefined ? JSON.stringify(body) : undefined,
    method,
    headers,
    credentials: 'include',
  });

  if (response.ok) {
    try {
      return await response.json();
    } catch (e) {
      console.log(
        'Error parsing JSON',
        e,
        response.status,
        response.statusText,
        response.url,
        response.body,
      );
      return {} as T;
    }
  }

  const statusCode = response.status;
  const error = await response.text();

  if (onError) {
    onError(statusCode, error);
  }

  throw new Error(error);
};

export const sendMultipartFormDataRequest = async <T>(
  method: 'POST' | 'PUT',
  path: string,
  mock: T,
  formData: FormData,
  onError?: (statusCode: number, error: any) => void,
): Promise<T> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.log('MOCK', method, path);
    // simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mock;
  }

  const url = `${apiUrl}${path}`;

  const response = await fetch(url, {
    body: formData,
    method,
    credentials: 'include',
  });

  if (response.ok) {
    try {
      return await response.json();
    } catch (e) {
      console.log(
        'Error parsing JSON',
        e,
        response.status,
        response.statusText,
        response.url,
        response.body,
      );
      return {} as T;
    }
  }

  const statusCode = response.status;
  const error = await response.text();

  if (onError) {
    onError(statusCode, error);
  }

  throw new Error(error);
};

export default sendJsonRequest;

export const makeQueryArgs = <T extends object>(opts: T): string => {
  return Object.keys(opts)
    .filter((key) => {
      const value = opts[key as keyof T];

      if (value === undefined) return false;

      if (typeof value === 'boolean' && value === false) return false;

      return true;
    })
    .map((key) => {
      const value = opts[key as keyof T];
      if (value === undefined) {
        return '';
      }

      if (typeof value === 'boolean' && value) {
        return `${key}=1`;
      }

      if (value === null) {
        return `${key}=1`;
      }

      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
      ) {
        return `${key}=${encodeURIComponent(value)}`;
      }

      return '';
    })
    .join('&');
};
