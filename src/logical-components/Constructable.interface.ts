interface ConstructableInterface<T> {
    new(...args: any) : T;
}

export default ConstructableInterface