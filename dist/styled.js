// import { CSSProperties } from 'react';
export {};
// // 1. Tipo para convertir propiedades CSS en strings template literales
// type CssProperty = keyof CSSProperties;
// type CssTemplate = {
//   [K in CssProperty]: `${K}: ${string};`;
// }[CssProperty];
// // 2. Función tagged template con validación de tipos
// const css = (strings: TemplateStringsArray, ...values: any[]): string => {
//   let result = '';
//   strings.forEach((str, i) => {
//     result += str + (values[i] || '');
//   });
//   return result;
// };
// // 3. Declaración de tipo para el contexto de plantillas
// declare module './css' {
//   interface CSSFunction {
//     (strings: TemplateStringsArray, ...values: any[]): string;
//     /** @example css`width: 10px; color: red;` */
//     (
//       strings: TemplateStringsArray & { raw?: readonly string[] },
//       ...values: any[]
//     ): string;
//   }
// }
// // Uso
// export const styles = css`
//   width: 100%;
//   height: 100%;
//   background-color: blue;
//   /* El autocompletado funciona para propiedades CSS válidas */
// `;
