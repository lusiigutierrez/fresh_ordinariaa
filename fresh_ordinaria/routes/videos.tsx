import {
  FreshContext,
  Handlers,
  PageProps,
  RouteConfig,
} from "$fresh/server.ts";
import { Video } from "../types.ts";
import VideosList from "../components/VideosList.tsx";

type State = {
  id: string;
  name: string;
  email: string;
};

type Data = {
  videos: Video[];
  userid: string;
};

export const handler: Handlers<Data, State> = {
  GET: async (req: Request, ctx: FreshContext<State, Data>) => {
    const userid = ctx.state.id;

    const API_URL = Deno.env.get("API_URL");
    if (!API_URL) {
      throw new Error("API_URL is not set in the environment");
    }

    const response = await fetch(`${API_URL}/videos/${userid}`);
    if (response.status !== 200) {
      return ctx.render({ videos: [], userid: "" });
    }

    const videos: Video[] = await response.json();
    return ctx.render({ videos, userid });
  },
};

const Page = (props: PageProps<Data>) => (
  <div>
    <VideosList videos={props.data.videos} userid={props.data.userid} />
  </div>
);

export default Page;
