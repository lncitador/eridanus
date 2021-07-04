import path from "path";

import { GrpcObject, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

import options from "./pb/options";

export function loadProto(): GrpcObject {
  const packageDefinition = loadSync(
    path.resolve(__dirname, "pb", `article.proto`),
    options
  );
  return loadPackageDefinition(packageDefinition);
}
