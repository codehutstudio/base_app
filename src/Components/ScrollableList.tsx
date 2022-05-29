import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React, { createRef, useEffect, useRef, useState } from 'react'
const ListContainer = styled(Box)({
    height: '100%',
    width: '100%'
})
const ListWrapper = styled(Box)((props: any) => ({
    height: props.height,
    width: '100%',
    overflowY: 'scroll',
}))
export default function ScrollableList({children}: any) {
    const ref = useRef()
    const [height, setHeight] = useState(null)
    useEffect(() => {
        if(ref && ref.current) {
            setHeight((ref.current as HTMLElement).clientHeight as any)
        }
    }, [ref])
    return (
        <ListContainer ref={ref}>
            {height && <ListWrapper height={height}>{children}</ListWrapper>}
        </ListContainer>
    )
}
