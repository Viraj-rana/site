declare global {
  interface Window {
    // Flags used by timeline/code that we access dynamically
    __careerTimelineBound?: boolean;
    __nameDustCancel?: () => void;

    // Allow other dynamic keys used as runtime flags (keeps typings strict for known keys)
    [key: string]: unknown;
  }
}

export {};
