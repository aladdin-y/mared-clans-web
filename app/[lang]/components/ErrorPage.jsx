"use client"
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import img from "../../public/imgs/404 Page Not Found.png"

const ErrorPage = ({ code, message }) => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    
    return <>
        <Head>
            <title>{code} | Aladdin</title>
        </Head>

        <div className="flex flex-col justify-center items-center min-h-screen text-center  py-20">
            <div className="flex flex-col items-center">
                <Image src={img} alt="Page Not Found" width={400} />
            </div>
            <h1 className="text-4xl font-extrabold text-white mt-6">{code}</h1>
            <p className="text-xl font-thin text-white text-opacity-75 mb-4">{message}</p>
            <button
                className="w-42 shadow-lg mt-2 shadow-amber-600/20 rounded-xl py-2 font-medium px-7 text-zinc-900 bg-amber-400 hover:bg-opacity-50 transition duration-200"
                onClick={() => {
                    setClicked(true);
                    router.back();
                }}
            >
                {clicked ? <i className="fad fa-spinner-third fa-spin text-white" /> : <><i className='fa fa-arrow-left mr-2' />Go Back</>}
            </button>
        </div>
    </>
}

export default ErrorPage;
