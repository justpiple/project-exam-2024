declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      [key: string]: string | undefined;
    }
  }
}
export {};
