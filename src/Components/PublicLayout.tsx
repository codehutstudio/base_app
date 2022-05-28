import { styled } from '@mui/system';
import React from 'react'
import { Col } from './LayoutElements';
interface Props {
    header?: JSX.Element[] | JSX.Element;
    sidebar?: JSX.Element[] | JSX.Element;
    content: JSX.Element[] | JSX.Element;
}


const SiteWrapper = styled(Col)({
    height: '100%',
    width: '100%',
})
const Sidebar = styled(Col)({
    flexBasis: '250px'
}) 
const Header = styled(Col)({
    flexGrow: 1
})
const Content = styled(Col)({
    flexGrow: 1
})
const MainContent = styled(Col)({
    flexGrow: 1,
    width: '100%',
})

export default function PublicLayout(props: Props) {
  return (
    <SiteWrapper>
        {props.sidebar && <Sidebar>{props.sidebar}</Sidebar>}
        <Content>
            {props.header && <Header>{props.header}</Header>}
            <MainContent>{props.content}</MainContent>
        </Content>
    </SiteWrapper>
  )
}
