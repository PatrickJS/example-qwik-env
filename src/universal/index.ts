import { isServer } from "@builder.io/qwik/build";

import * as Browser from "./browser";
import * as Server from "./server";

export * as types from "./types";

export const create = isServer ? Server.create : Browser.create;

export const query = isServer ? Server.query : Browser.query;
