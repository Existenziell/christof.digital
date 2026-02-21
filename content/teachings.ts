import type { Teaching } from '@/types/teaching'

export const teachings: Teaching[] = [
    {
        date: '2004 - today',
        title: 'Language Teacher',
        description: 'I speak and write English, French and German fluently and have been teaching these languages in a private setting for many years. Communication is the key to understanding the world.',
        image: 'language-teacher.jpg',
    },
    {
        date: '2019 - today',
        title: 'Yoga Teacher',
        description: 'I am fascinated by Yoga, breathwork and the power it gives me to ovecome my internal struggles. It has helped me tremendously and I love to share this knowledge with others. I am Yoga Alliance RYT-500 and ERYT-200 certified.',
        image: 'yoga.jpg',
        link: '/teaching/yoga',
        external: false,
    },
    {
        date: '2018 - today',
        title: 'Slackline Workshops',
        description: 'I love slacklining and have been teaching slackline workshops for many years. The art of balancing a tight rope is a beautiful way to reach flow states and connect with the present moment.',
        image: 'slackline.jpg',
    },
    {
        date: 'March 2024',
        title: 'Workshop at Bitcoin Atlantis Conference',
        description: 'I had the pleasure to teach a workshop for Bitcoin Beginners at the Bitcoin Atlantis Conference on Madeira Island. Introducing the basics of Bitcoin and the beautiful potential of this open source technology.',
        image: 'bitcoin-atlantis.png',
        link: 'https://bitcoinatlantis.com/',
        external: true,
    },
    {
        date: '2023 - 2024',
        title: 'Teacher for the Hacker School',
        description: 'I was a teacher for the Hacker School (Germany), teaching students the basics of software engineering, programming languages, software development, and software engineering principles.',
        image: 'hacker-school.png',
        link: 'https://hacker-school.de/',
        external: true,
    },
    {
        date: 'May 2019',
        title: 'Volunteer for the Bali Children Foundation',
        description: 'Bali Children Foundation helps thousands of children to complete school, to find employment, and to improve their lives and the life of their community. I participated in the annual Bali Children Foundation Yoga Days, teaching Yoga to the children.',
        image: 'bali-children-foundation.png',
        link: 'https://www.balichildrenfoundation.org/',
        external: true,
    },
    {
        date: '2004 - 2006',
        title: 'Learning institute for customized education',
        description: 'The Lernstudio Barbarossa is a learning institute for customized education. During my computer science studies in Karlsruhe, I worked as a tutor for the subjects Mathematics, Physics, Programming and Foreign Languages (English, French, German).',
        image: 'lernstudio-barbarossa.png',
        link: 'https://www.lernstudio-barbarossa.de/en/locations/karlsruhe/',
        external: true,
    },
]