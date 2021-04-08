import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CommentCreate from "./CommentCreate";

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const renderedComments = Object.values(comments).map(comment => {
        return (
            <li key={comment.id}>{comment.content}</li>
        )
    })

    const numberOfComments = () => {
        if (comments.length > 1) {
            return (
                <p>{comments.length} comments</p>
            )
        }
    }

    return (
        <div>
            {numberOfComments()}
            <ul>
                {renderedComments}
            </ul>
        </div>
    )
}

export default CommentList;