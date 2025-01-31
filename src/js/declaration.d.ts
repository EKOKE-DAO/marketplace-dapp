declare module '*.webp' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export = value;
}

declare module '*.gif' {
  const value: any;
  export = value;
}

interface Window {
  dataLayer: any[];
  gtag?: (...args: any[]) => void;
}
