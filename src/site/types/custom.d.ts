import { FC } from "react";

declare module "*.svg" {
  const content: FC;
  export default content;
}
