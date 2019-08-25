declare module 'xhook' {
  const x: { xhook: any };
  export = x;
}

declare module 'nanoid' {
  const nanoid: (size?: number) => string;

  export = nanoid;
}
