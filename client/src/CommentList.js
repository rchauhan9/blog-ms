import React from 'react';


const CommentList = ({ comments }) => {

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