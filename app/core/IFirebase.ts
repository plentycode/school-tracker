interface IFirebase {
    initializeApp(config: any): void;
    auth: any;
    database: () => any;
    storage: () => any;
}
