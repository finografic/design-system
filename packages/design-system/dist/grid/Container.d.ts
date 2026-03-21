import * as react from "react";
import { ComponentPropsWithoutRef } from "react";

//#region src/grid/Container.d.ts
interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  fluid?: boolean;
}
declare const Container: react.ForwardRefExoticComponent<ContainerProps & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Container, type ContainerProps };
//# sourceMappingURL=Container.d.ts.map