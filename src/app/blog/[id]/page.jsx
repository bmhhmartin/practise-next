import React from 'react';
import getSinglePost from "@/libs/getSinglePost";
import Click from './click';

const Page = async ({params}) => {

    const id = params.id;

    const singleBlog = await getSinglePost(id)

    return (
        <div>
            <h3 className="font-bold text-green-600">{singleBlog.title}</h3>
            <p className="text-green-950">{singleBlog.body}</p>
           <Click></Click>
        </div>
    );
};

export default Page;