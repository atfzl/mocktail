declare module 'xhook' {
  const x: any;
  export = x;
}

declare module 'nanoid' {
  const nanoid: (size?: number) => string;

  export = nanoid;
}

declare module '@storybook/html' {
  const x: { storiesOf: any; configure: any };
  export = x;
}
