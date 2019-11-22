export {}

declare global {
    interface Array<T> {
        removeBy<T>(target: T): void;

        shuffle<T>(): void;
    }
}

Array.prototype.removeBy = function <T>(target: T): void {
    const index = this.indexOf(target, 0);
    if (index > -1) {
        this.splice(index, 1);
    }
};

Array.prototype.shuffle = function <T>(): void {
    for (let i = this.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = this[i];
        this[i] = this[r];
        this[r] = tmp;
    }
};

export const range =
    (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);