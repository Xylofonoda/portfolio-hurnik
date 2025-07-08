interface ChangeEvent<T> {
    target: {
        name?: string;
        value: T;
    }
}

export function createChangeEvent<T>(name: string | undefined, value: T): ChangeEvent<T> {
    return { target: { name: name || "", value } };
}