// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "./postSlice";

// const PostView = () => {
//     const dispatch = useDispatch();
//     const { isLoading, posts, error } = useSelector((state) => state.posts);

//     useEffect(() => {
//         dispatch(fetchPosts());
//         if (error) {
//             alert(error);
//         }
//     }, [dispatch, error]);

//     const firstTenPosts = posts ? posts.slice(0, 10) : [];

//     return (
//         <div>
//             <h1>Post View</h1>
//             <h2>{isLoading && <p>Loading....</p>}</h2>
//             <h2>{error && <p>{error}</p>}</h2>
//             {firstTenPosts.map((post) => {
//                 return (
//                     <div key={post.userId}>
//                         <h3>Title: {post.title}</h3>
//                         <p>Body: {post.body}</p>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default PostView;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
    const dispatch = useDispatch();
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        dispatch(fetchPosts());
        if (error) {
            alert(error);
        }
    }, [dispatch, error]);

    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const currentPosts = posts
        ? posts.slice(indexOfFirstPost, indexOfLastPost)
        : [];

    const totalPages = posts ? Math.ceil(posts.length / pageSize) : 0;
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h1>Post View</h1>
            <h2>{isLoading && <p>Loading....</p>}</h2>
            <h2>{error && <p>{error}</p>}</h2>
            {currentPosts.map((post) => {
                return (
                    <div key={post.id}>
                        <h3>Title: {post.title}</h3>
                        <p>Body: {post.body}</p>
                    </div>
                );
            })}
            <div>
                {pageNumbers.map((pageNumber) => {
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => handleClick(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PostView;
