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
import { Box } from '@mui/material'

export type LoadingType = 'audio' | 'ball' | 'bars' | 'circles' | 'grid' | 'hearts' | 'oval' | 'puff' | 'rings' | 'tailSpin' | 'threeDots'
export default function Loading({type, color}: {type?:LoadingType, color?:string}) {
    switch(type) {
        case 'ball': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><BallTriangle height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'bars': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Bars height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'circles': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Circles height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'grid': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Grid height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'hearts': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Hearts height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'oval': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Oval height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'puff': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Puff height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'rings': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Rings height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'tailSpin': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><TailSpin height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'threeDots': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><ThreeDots height={100} width={100} color={color ? color : 'grey'} /></Box>
        case 'audio': return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Audio height={100} width={100} color={color ? color : 'grey'} /></Box>
        default: return <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Audio height={100} width={100} color={color ? color : 'grey'} /></Box>
    }
}
