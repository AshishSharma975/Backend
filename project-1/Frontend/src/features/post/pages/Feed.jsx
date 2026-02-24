import React from 'react';
import PostCard from '../components/PostCard';

const Feed = () => {
    const samplePosts = [
        {
            id: 1,
            username: 'johndoe',
            userProfile: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
            likes: 1240,
            caption: 'Exploring the new trends in tech! #tech #coding #future',
            commentsCount: 45,
            timeAgo: '2 hours ago'
        },
        {
            id: 2,
            username: 'alyx star',
            userProfile: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
            likes: 856,
            caption: 'Coffee and code - the perfect combination. ☕️💻',
            commentsCount: 12,
            timeAgo: '5 hours ago'
        }
    ];

    return (
        <main style={{ backgroundColor: '#fafafa', minHeight: '100vh', padding: '20px 0', display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            {samplePosts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </main>
    );
};

export default Feed;