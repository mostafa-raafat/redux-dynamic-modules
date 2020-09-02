import { connect } from "react-redux";
import React from "react";
import "./posts-component.css";
import "../../widgets.css";

const Posts = ({ loading, name, temperature, description }) => {
    if (loading) {
        return <div className="posts-root widget">Loading Posts...</div>;
    }

    return (
        <div className="posts-root widget">
            <h2>{name}</h2>
            <div>{description}</div>
            <div>{temperature}°C</div>
        </div>
    );
};

const mapStateToProps = state => {
    if (!state.postsState || !state.postsState.posts) {
        return {
            loading: true,
        };
    }

    return {
        name: state.postsState.posts.name,
        temperature: Math.round(state.postsState.posts.main.temp - 273),
        description: state.postsState.posts.weather[0].description,
    };
};

export const ConnectedPosts = connect(mapStateToProps)(Posts);
