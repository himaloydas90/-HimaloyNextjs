import React from 'react';
import { apiClient } from '../lib/ApiClient';
import PostCard from '../component/ui/post-card';

const page = async ({ params }) => {
    const { id } = await params; 
    const postData = await apiClient.get(`/posts/${id}`, { revalidate: 60 });
    const commentsData = await apiClient.get(`/posts/${id}/comments`, { revalidate: 60 });
    const commentList = commentsData?.comments || [];
    return (
        <div className="max-w-2xl mx-auto p-4">
                <PostCard post={postData} />
                <div className="mt-8 border-t pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Comments ({commentList?.length})
                    </h3>
                    {commentList?.length === 0 ? (
                        <p className="text-gray-600 text-sm">No comments yet on this post.</p>
                    ) : (
                        <div className="space-y-4">
                            {commentList?.map((comment) => (
                                <div 
                                    key={comment?.id} 
                                    className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                                >
                                    <div className="flex items-center mb-1">
                                        <span className="font-semibold text-sm text-gray-800">
                                            @{comment?.user?.username}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-base">
                                        {comment?.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
        </div>
    );
};

export default page;