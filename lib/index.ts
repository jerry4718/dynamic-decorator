export interface IDecorator {
    (clazz: object, name: string, props: PropertyDescriptor): any
}

export interface IDecoratorBuilder<T> {
    (input: T): IDecorator
}

export interface IDynamicDecorator<T> extends IDecorator, IDecoratorBuilder<T> {
    (clazz: object | T, name: string, props: PropertyDescriptor): any | IDecorator;
}

export function dynamicDecorator<T>(defaultArg: T, builder: IDecoratorBuilder<T>): IDynamicDecorator<T> {
    return function () {
        const args = arguments;
        if (args.length > 1) {
            builder(defaultArg).apply(null, args);
        } else {
            return builder(args[0]);
        }
    }
}
