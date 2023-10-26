declare type TimeoutHandle = ReturnType<typeof setTimeout>;

declare type Nullable<T> = T | null;
declare type Recordable<T = any> = Record<string, T>;