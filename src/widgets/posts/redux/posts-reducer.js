import produce from "immer";
import { PostsLoaded } from "./posts-actions";

export const postsReducer = (state, action) => {
    return produce(state || {}, draft => {
        switch (action.type) {
            case PostsLoaded: {
                draft.posts = action.payload;
                break;
            }

            default: {
                //do nothing
            }
        }
    });
};
