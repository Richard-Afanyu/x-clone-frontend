export type HappeningType = {
    id: number,
    title: string,
    category: string,
    trending: boolean,
    posts: number
}

export type FollowType = {
    id: number;
    title: string,
    username: string,
    image: string,
}

export type PostType = {
    id: number, 
    userImage: string,
    user: string,
    username: string,
    time: string,
    desc: string,
    postImage?: string,
    hashtags: string[],
    comments: number,
    retweets: number,
    likes: number,
    engagement: number,
    verified: boolean,
    following: boolean
}