import type React from "react";
import { Foo } from "./Foo";

export default function App(): React.ReactNode {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf8" />
      </head>
      <body>
        <Foo />
      </body>
    </html>
  );
}
