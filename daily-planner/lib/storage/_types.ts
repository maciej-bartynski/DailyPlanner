type tAccess = unknown[]

export interface iTable {
    prefix: string,
    getItem: (id:string) => Promise<tAccess>;
    setItem: (item: unknown) => Promise<tAccess>;
    delItem: (key:string) => void;
    patchItem: (key: string, fields: Record<string, unknown>) => void;
}

