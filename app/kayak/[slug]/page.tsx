import React from 'react'
import kayaks from '@/data/kayak';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const page = ({ params }: { params: { slug: string } }) => {
    const id = params.slug
    const kayak = kayaks.find((kayak: any) => kayak.slug === id)

    if (!kayak) {
        return <div>component Not Found</div>
    }

    return (
        <>
            <Navbar />
            <main>
                <section className='px-6 mt-6 lg:px-8 lg:mt-8'>
                    <div className='relative isolate overflow-hidden shadow-xl shadow-gray-400 bg-white rounded-2xl'
                        style={{
                            backgroundImage: `${kayak.image}`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className='absolute w-full h-full z-[-9] bg-gradient-to-b from-black/30 to-black/70'></div>

                        <div className='mx-auto max-w-7xl py-20 px-6 lg:px-8 flex flex-col gap-y-6 justify-between'>
                            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
                                Kayak {kayak.title}
                            </h2>
                            <p className='my-auto text-lg leading-8 max-w-3xl text-gray-100'>
                                Please don&apos;t hesitate to get in touch with us for any type of information or problem that you may have. We are here to help and provide assistance in any way we can.
                            </p>
                        </div>
                    </div>
                </section>
                {kayak.title}
            </main>
            <Footer />
        </>
    )
}

export default page


export async function generateMetadata({ params }: { params: { slug: string } }) {
    const id = params.slug

    const kayak = kayaks.find((kayak) => kayak.slug === id)

    return {
        title: kayak?.title,
        description: kayak?.title,
        metadataBase: new URL('https://www.seahawkadventures.com/'),
        openGraph: {
            images: [
                {
                    url: kayak?.image
                }
            ]
        }
    }
}