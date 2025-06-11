import { Storage } from "@google-cloud/storage";
import { TrackData } from "../context";

export async function getMusic(): Promise<TrackData[]> {
  const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
    credentials: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    },
  });
  const bucket = storage.bucket(process.env.GCP_BUCKET_NAME ?? "");

  const [file] = await bucket.getFiles();
  const tracks = file.map((file) => ({ src: file.publicUrl(), title: file.name }));
  return tracks;
}
