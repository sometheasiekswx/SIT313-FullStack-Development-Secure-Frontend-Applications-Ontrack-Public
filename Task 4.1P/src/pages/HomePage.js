import React from 'react'
import Box from '@mui/material/Box'

import Stack from '@mui/material/Stack'

import FeaturedCards from '../components/FeaturedCards'
import Subscribe from '../components/Subscribe'

import alteredCarbonWallpaper from '../images/altered-carbon-wallpaper.jpg'
import alterdCarbon1 from '../images/altered-carbon-1.jpg'
import alterdCarbon2 from '../images/altered-carbon-2.jpg'
import alterdCarbon3 from '../images/altered-carbon-3.jpg'
import alterdCarbon4 from '../images/altered-carbon-4.jpg'
import alterdCarbon6 from '../images/altered-carbon-6.jpg'
import alterdCarbon7 from '../images/altered-carbon-7.jpg'
import alterdCarbon8 from '../images/altered-carbon-8.jpg'
import alterdCarbon9 from '../images/altered-carbon-9.jpg'


const featuredArticles = [{
    name: 'Cyberpunked!',
    description: 'Get cyberpunked! I have no idea what I am writing.',
    rating: 3.5,
    author: 'Somethea',
    imageLink: alterdCarbon1,
}, {
    name: 'Dog cyber-security 101',
    description: 'Even dogs need to learn how to protect themselves when going online. I guess this book might help your grandmother as well.',
    rating: 4.9,
    author: 'The Wok',
    imageLink: alterdCarbon2,
}, {
    name: 'Tom & Jerry: How Jerry lost his virginity',
    description: 'I am out of ideas at this point...',
    rating: 5.0,
    author: 'Zhong Xina',
    imageLink: alterdCarbon3,
}, {
    name: 'The secret book of secrets',
    description: 'Hello there! You found me!',
    rating: 3.0,
    author: 'Somethea',
    imageLink: alterdCarbon4,
},]

const featuredTutorials = [{
    name: 'How to prevent the frogs turning gay: 10 preventive methods',
    description: 'Yes they are turning gay!',
    rating: 4.5,
    author: 'Zhong Xina',
    imageLink: alterdCarbon6,
}, {
    name: 'How to tie a tie',
    description: 'Just google it.',
    rating: 4.0,
    author: 'Somethea',
    imageLink: alterdCarbon7,
}, {
    name: 'How to learn to learn to learn about learning',
    description: 'Just learn about it! I am just going to try random stuff to both test what happens when the text overflows as well as to improve my typing speed. Hello world, I am Somethea Siek, my life is alright. Well... It definitely can go a lot better. It is such a roller coaster with high highs and low lows.',
    rating: 2.6,
    author: 'Somethea',
    imageLink: alterdCarbon8,
}, {
    name: 'How to reveal secrets',
    description: 'Just do it man. Reveal those secrets. You have got this man!',
    rating: 3.6,
    author: 'Zhong Xina',
    imageLink: alterdCarbon9,
},]


const HomePage = () => {
    return (
        <Stack spacing={0} direction='column'
               justifyContent='center'
               alignItems='center'>
            <Box
                component='img'
                sx={{
                    width: {xs: '100%'},
                }}
                alt='Altered carbon wallpaper'
                src={alteredCarbonWallpaper}
            />
            <FeaturedCards title={'Featured articles'} data={featuredArticles}/>
            <FeaturedCards title={'Featured Tutorials'} data={featuredTutorials}/>
            <Subscribe/>
        </Stack>
    )
}

export default HomePage