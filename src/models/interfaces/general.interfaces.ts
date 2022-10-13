export interface RequestAction {
    onSuccess: (data?: any) => void;
    onError: (err?: any) => void;
}