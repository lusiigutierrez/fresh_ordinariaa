import { useSignal } from "@preact/signals";
import {FreshContext,Handlers,PageProps,RouteConfig} from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { setCookie } from "$std/http/cookie.ts";
import jwt from "jsonwebtoken";
import Login from "../components/Login.tsx";

export default function Home() {

  return (
   <Login/>
  );
}
