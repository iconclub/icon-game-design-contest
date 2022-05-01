export interface Response {
  statusCode: number;
  message: string;
  data: any;
}

export class HttpClient {
  private static instance: HttpClient;

  private baseUrl = __PROD__ ? __SERVER_URL__ : "http://localhost:5000";
  private headers = {
    "Content-Type": "application/json",
  };

  private constructor() {}

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }

  public async get(url: string, params = {}): Promise<Response> {
    const processedUrl = this.processUrl(url);
    const search = new URLSearchParams(params);

    const response = await fetch(`${this.baseUrl}/${processedUrl}?${search}`, {
      method: "GET",
      credentials: "include",
    });

    return response.json();
  }

  public async post(
    url: string,
    data = {},
    params = {},
    headers = this.headers
  ): Promise<Response> {
    const processedUrl = this.processUrl(url);
    const search = new URLSearchParams(params);

    const response = await fetch(`${this.baseUrl}/${processedUrl}?${search}`, {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify(data),
    });

    return response.json();
  }

  private processUrl(url: string): string {
    return url.startsWith("/") ? url.slice(1) : url;
  }
}

export const api = HttpClient.getInstance();
