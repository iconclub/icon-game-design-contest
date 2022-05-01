/// <reference types="svelte" />

export {};

declare global {
  var __PROD__: boolean;
  var __SERVER_URL__: string;
  var __GOOGLE_CLIENT_ID__: string;

  interface Window {
    handleCredentialResponse: (response: any) => void;
  }
}
