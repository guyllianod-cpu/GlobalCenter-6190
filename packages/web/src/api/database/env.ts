// Typage des variables d'environnement de la base (utile aussi au typecheck mobile)
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL?: string;
      DATABASE_AUTH_TOKEN?: string;
    }
  }
}
export {};
