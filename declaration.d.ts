// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, StyleProp<TextStyle>>;
  export default content;
}
