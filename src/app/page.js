'use client'

import React from 'react';
import {signIn} from "next-auth/react";

const Page = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
                    </div>
                    <div>
                        <button onClick={()=>signIn("github")}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log In With GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;