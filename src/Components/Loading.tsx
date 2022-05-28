import  {
    Audio,
    BallTriangle,
    Bars,
    Circles,
    Grid,
    Hearts,
    Oval,
    Puff,
    Rings,
    TailSpin,
    ThreeDots
} from 'react-loader-spinner'

import React from 'react'


export default function Loading({type}: {type:string}) {
    switch(type) {
        default: return <Audio height={100} width={100} color='grey' />
    }
}
