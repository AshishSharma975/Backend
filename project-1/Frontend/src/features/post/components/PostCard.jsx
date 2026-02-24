import React, { useState } from 'react';
import '../styles/post-card.scss';

const PostCard = ({ post }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    if (!post) return null;


    const username = post.user?.username || "Unknown";
    const profileImage = post.user?.profileImage || "https://via.placeholder.com/150";
    const postImage = post.imgUrl || "https://via.placeholder.com/600";
    const caption = post.caption || "";
    const likesCount = typeof post.likes === "number" ? post.likes.toLocaleString() : "0";
    const commentsCount = typeof post.commentsCount === "number" ? post.commentsCount : 0;
    const timeAgo = post.timeAgo || "";

    return (
        <div className="post-card">
            {/* Header */}
            <div className="post-header">
                <div className="user-info">
                    <img
                        src={profileImage}
                        alt={username}
                        className="profile-img"
                    />
                    <span className="username">{username}</span>
                </div>
                <div className="more-options">
                    <svg aria-label="More options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                </div>
            </div>

            {/* Media */}
            <div className="post-media">
                <img src={postImage} alt="Post content" />
            </div>

            {/* Actions */}
            <div className="post-actions">
                <div className="left-actions">
                    <div className="action-icon like-btn">
                        <svg aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.194 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.252.398.539.833.617 1.115.077-.282.366-.717.617-1.115a4.21 4.21 0 013.675-1.941m0-2a6.22 6.22 0 00-5.292 2.822 6.22 6.22 0 00-5.292-2.822 6.98 6.98 0 00-6.708 7.218c0 4.228 3.328 6.46 6.136 8.973l1.171 1.05a1.144 1.144 0 001.586 0l1.171-1.05C18.172 15.34 21.5 13.108 21.5 8.882a6.98 6.98 0 00-6.708-7.218z"></path>
                        </svg>
                    </div>
                    <div className="action-icon">
                        <svg aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </div>
                    <div className="action-icon">
                        <svg aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="action-icon">
                    <svg aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                    </svg>
                </div>
            </div>

            {/* Post Stats */}
            <div className="post-stats">
                <span className="likes-count">{likesCount} likes</span>
            </div>

            {/* Post Content */}
            <div className="post-content">
                <span className="caption-username">{username}</span>
                <span className="caption-text">{caption}</span>
            </div>

            {/* Post Footer */}
            <div className="post-footer">
                <span className="view-comments">View all {commentsCount} comments</span>
                <span className="timestamp">{timeAgo}</span>
            </div>

            {/* Comment Input */}
            <div className="comment-input-area">
                <textarea
                    placeholder="Add a comment..."
                    className="comment-input"
                    value={comment}
                    onChange={handleCommentChange}
                ></textarea>
                <button className={`post-btn ${comment.trim() ? 'active' : ''}`}>
                    Post
                </button>
            </div>
        </div>
    );
};

export default PostCard;