// These are just to get VSCode to stop saying
// errors are coming from outside of .tsx files.

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

// react helmet doesn't provide type annotations
declare module "react-helmet" {
  export const Helmet: any;
}
