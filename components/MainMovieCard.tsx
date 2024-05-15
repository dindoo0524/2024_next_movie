import moment from "moment";
import React from "react";
import Link from "next/link";

type MainVideoCardProps = {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
  publishTime: string;
};

const MainVideoCard: React.FC<MainVideoCardProps> = ({
  videoId,
  title,
  thumbnailUrl,
  channelTitle,
  publishTime,
}) => {
  const relativeTime = moment(publishTime).fromNow();

  return (
    <Link href={`/movies/${videoId}`}>
      <div className="w-[210px] m-1 cursor-pointer bg-gray-200 rounded-lg overflow-hidden">
        <div
          className="h-[120px] bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        ></div>
        <div className="p-2">
          <h2 className="overflow-hidden line-clamp-2 text-[12px]">{title}</h2>
          <div className="text-gray-500 text-[10px]">
            <p>{channelTitle}</p>
            <p>{relativeTime}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainVideoCard;
