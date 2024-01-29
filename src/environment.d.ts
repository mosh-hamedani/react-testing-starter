declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_AUTH0_DOMAIN: string;
      VITE_AUTH0_CLIENTID: string;
      AUTH0_USERNAME: string;
      AUTH0_PASSWORD: string;
    }
  }
}

export {};
