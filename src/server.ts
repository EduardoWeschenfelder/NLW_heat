import { serverHttp } from "./app";

serverHttp.listen(4000, () =>
  console.log("Running in port 4000")
);