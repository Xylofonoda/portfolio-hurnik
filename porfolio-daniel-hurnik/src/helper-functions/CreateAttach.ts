export type AttachFunc = (name: string) => AttachProps;


export interface AttachProps {
    name: string
    value?: any;
    error?: string;
    onChange: (e: any) => void;
}

export interface AttachConfig<T extends { [key: string]: any }> {
    handleChange: (eventOrPath: string | React.ChangeEvent<any>) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    values: T;
    errors: { [key: string]: any }
}

export function createAttach<T extends { [key: string]: any }>(formik: AttachConfig<T>): AttachFunc {
    return (name: string) => {
        const val = formik.values[name];
        return {
            name,
            onChange: formik.handleChange,
            value: val,
            error: formik.errors[name]
        }
    }

}