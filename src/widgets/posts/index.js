import { ConnectedPosts } from "./component/posts-component";
import { getPostsModule } from "./redux/posts-module";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import * as React from "react";

export default function Dynamic() {
    return (
        <DynamicModuleLoader modules={[getPostsModule()]}>
            <ConnectedPosts />
        </DynamicModuleLoader>
    );
}
