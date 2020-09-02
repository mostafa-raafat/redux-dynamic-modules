export const PostsLoaded = "posts/postsLoaded";

export const postsLoaded = posts => {
    return {
        type: PostsLoaded,
        payload: posts,
    };
};
