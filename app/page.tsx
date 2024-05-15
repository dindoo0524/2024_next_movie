import React from "react";
import MainMovieCard from "../components/MainMovieCard";
import path from "path";
import fs from "fs";

export const metadata = { title: "Home Page" };

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

interface VideoId {
  kind: string;
  videoId: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Video {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
}

export const getMovies = async () => {
  const filePath = path.join(process.cwd(), "public", "data", "mainData.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  const videoList = data.items;

  return videoList;
};

const HomePage: React.FC = async () => {
  const videoList: Video[] = await getMovies();
  return (
    <div className="flex flex-wrap justify-between p-2">
      {videoList.map((video: Video) => {
        return (
          <MainMovieCard
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            thumbnailUrl={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            publishTime={video.snippet.publishTime}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
