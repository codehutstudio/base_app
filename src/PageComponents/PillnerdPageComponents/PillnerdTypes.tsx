export interface User {
    lastUpdated: number;
    id: string;
    accessToken: string;
    idToken: string;
    providerId: string;
    refreshToken: string;
    signInMethod: string;
    firstName: string;
    lastName: string;
    email: string;
    uid: string;
    displayName: string;
    level: string;
    phoneNumber: number;
    photoUrl: string;
}
export interface AppState {
    lists: any[] | null
}