import React from "react";
import { PostType } from "../../types";
import Image from "next/image";
import {
  BarChart,
  Download,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Pin,
  RefreshCcw,
  Verified,
  X,
} from "lucide-react";

interface Props {
  tweet: PostType;
}

function Post({ tweet }: Props) {
  let commentValue;
  let commentShow;
  if (tweet.comments >= 10000 && tweet.comments < 999999) {
    commentValue = tweet.comments / 1000;
    commentShow = `${commentValue}K`;
  } else if (tweet.comments >= 1000000) {
    commentValue = tweet.comments / 1000000;
    commentShow = `${commentValue}M`;
  } else {
    commentShow = `${tweet.comments}`;
  }

  let retweetValue;
  let retweetShow;
  if (tweet.retweets >= 10000 && tweet.retweets < 999999) {
    retweetValue = tweet.retweets / 1000;
    retweetShow = `${retweetValue}K`;
  } else if (tweet.retweets >= 1000000) {
    retweetValue = tweet.retweets / 1000000;
    retweetShow = `${retweetValue}M`;
  } else {
    retweetShow = `${tweet.retweets}`;
  }

  let likesValue;
  let likesShow;
  if (tweet.likes >= 10000 && tweet.likes < 999999) {
    likesValue = tweet.likes / 1000;
    likesShow = `${likesValue}K`;
  } else if (tweet.likes >= 1000000) {
    likesValue = tweet.likes / 1000000;
    likesShow = `${likesValue}M`;
  } else {
    likesShow = `${tweet.likes}`;
  }

  let engagementValue;
  let engagementShow;
  if (tweet.engagement >= 10000 && tweet.engagement < 999999) {
    engagementValue = tweet.engagement / 1000;
    engagementShow = `${engagementValue}K`;
  } else if (tweet.engagement >= 1000000) {
    engagementValue = tweet.engagement / 1000000;
    engagementShow = `${engagementValue}M`;
  } else {
    likesShow = `${tweet.engagement}`;
  }

  return (
    <div className="flex py-3 px-3 gap-2 w-full border-b border-white/30">
      <div>
        <Image
          src={tweet.userImage}
          alt="profile image"
          width={35}
          height={35}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        {/* post top */}
        <div className="flex justify-between">
          {/* left */}
          <div>
            {/* left top */}
            <div className="flex gap-1 items-center">
              <span className="font-semibold">{tweet.user}</span>
              {tweet.verified && <Verified size={18} stroke="#00ADED" />}
              <div className="border border-white/30 rounded-[2px]">
                <X size={18} />
              </div>
              <span className=" text-white/30 text-[12px] md:text-sm">
                {tweet.username}
              </span>
              <span className=" text-white/30 text-[12px] md:text-sm">.</span>
              <span className=" text-white/30 text-[12px] md:text-sm">
                {tweet.time}
              </span>
            </div>
            {/* left bottom */}
            <p className="mt-2">{tweet.desc}</p>
          </div>
          {/* right */}
          <div className="flex items-center gap-2">
            <button>
              <RefreshCcw size={20} stroke="rgb(255 255 255 / 0.3)" />
            </button>
            <button>
              <MoreHorizontal size={20} stroke="rgb(255 255 255 / 0.3)" />
            </button>
          </div>
        </div>
        {/* image */}
        {tweet.postImage && (
          <div className="relative w-full h-[400px] mt-2">
            <Image
              src={tweet.postImage}
              alt="post image"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        )}
        {/* bottom */}
        <div>
          {/* bottom top */}
          <div className="text-[12px] text-white/30 gap-2 flex">
            <span>From</span>
            <span>{tweet.user}</span>
            {/* <Verified size={18} stroke="#00ADED" /> */}
          </div>
          {/* bottom */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-white/30 text-[13px]">
              <button className="flex items-center hover:text-twitter transition-all ease-in duration-100 gap-1">
                <MessageCircle size={18} />
                <span>{commentShow}</span>
              </button>
              <button className="flex items-center hover:text-twitter transition-all ease-in duration-100 gap-1">
                <RefreshCcw size={18} />
                <span>{retweetShow}</span>
              </button>
              <button className="flex items-center hover:text-twitter transition-all ease-in duration-100 gap-1">
                <Heart size={18} />
                <span>{likesShow}</span>
              </button>
              <button className="flex items-center hover:text-twitter transition-all ease-in duration-100 gap-1">
                <BarChart size={18} />
                <span>{engagementShow}</span>
              </button>
              <div className="flex items-center gap-3">
                <button>
                  <Pin size={18} />
                </button>
                <button>
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
