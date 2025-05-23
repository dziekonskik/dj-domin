import { Storage } from "@google-cloud/storage";
import { TrackData } from "../context";

export async function getMusic(): Promise<TrackData[]> {
  const storage = new Storage();
  const bucket = storage.bucket(process.env.BUCKET_NAME ?? "");

  const [file] = await bucket.getFiles();
  const tracks = file.map((file) => ({ src: file.publicUrl(), title: file.name }));
  return tracks;
}
