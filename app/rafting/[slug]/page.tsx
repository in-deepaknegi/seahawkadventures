"use server"
import React from 'react'
import raftings from '@/data/rafting';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Icons from '@/components/Icons';

const page = async ({ params }: { params: { slug: string } }) => {
    const id = params.slug
    const rafting = raftings.find((rafting: any) => rafting.slug === id)

    if (!rafting) {
        return <div>component Not Found</div>
    }

    return (
        <>
            <Navbar />
            <main>
                <Icons />

                <Layout components={rafting.data} />
            </main>
            <Footer />
        </>
    )
}

export default page

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const id = params.slug

    const rafting = raftings.find((rafting) => rafting.slug === id)

    return {
        title: rafting?.title,
        description: rafting?.title,
        metadataBase: new URL('https://www.seahawkadventures.com/'),
        openGraph: {
            images: [
                {
                    url: rafting?.image
                }
            ]
        }
    }
}