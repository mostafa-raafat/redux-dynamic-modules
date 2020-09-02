import { postsReducer } from "./posts-reducer";
import { postsEpic } from "./posts-epic";

export function getPostsModule() {
    return {
        id: "posts",
        reducerMap: {
            postsState: postsReducer,
        },
        epics: [postsEpic]
    };
}