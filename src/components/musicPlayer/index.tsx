export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Player } from "./player";
import { Storage } from "@google-cloud/storage";
import { PlayerLoading } from "./player/loading";

const storage = new Storage();
const bucket = storage.bucket(process.env.BUCKET_NAME ?? "");

export async function getMusic() {
  const [file] = await bucket.getFiles();
  const tracks = file.map((file) => ({ src: file.publicUrl(), title: file.name }));
  return tracks;
}

export async function MusicPlayer() {
  const tracksPromise = getMusic();

  return (
    <Suspense fallback={<PlayerLoading />}>
      <Player {...{ tracksPromise }} />
    </Suspense>
  );
}
