import H1 from '@/components/(pages)/rafting/R1';
import H2 from '@/components/(pages)/rafting/R2';
import H3 from '@/components/(pages)/rafting/R3';


const rafting = [
    {
        id: 1,
        slug: '12-km-rafting',
        image: "url('/rafting/r01.jpg')",
        href: "/rafting/12-km-rafting",
        title: "12 Km Rafting in Rishikesh",
        data: [
            {
                id: 1,
                c1: <H1 />,
            }
        ]
    },
    {
        id: 2,
        slug: '16-km-rafting',
        image: "url('/rafting/r14.jpg')",
        href: "/rafting/16-km-rafting",
        title: "16 Km Rafting in Rishikesh",
        data: [
            {
                id: 1,
                c1: <H2 />,
            }
        ]
    },
    {
        id: 3,
        slug: '26-km-rafting',
        image: "url('/rafting/m00.jpg')",
        href: "/rafting/26-km-rafting",
        title: "26 Km Rafting in Rishikesh",
        data: [
            {
                id: 1,
                c1: <H3 />,
            }
        ]
    },
]

export default rafting