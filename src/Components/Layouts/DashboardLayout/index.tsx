import React from 'react'
import { Box, styled } from '@mui/material';
import { Col } from '../../LayoutElements';
import { border } from '../../../AppStyles';

interface Props {
    header?: JSX.Element | JSX.Element[];
    sidebar?: JSX.Element | JSX.Element[];
    footer?: JSX.Element | JSX.Element[];
    content: JSX.Element | JSX.Element[];
}

const Header = styled(Box)({
    borderBottom: border,
    height: '64px'
})
const Sidebar = styled(Box)({
    borderRight: border,
    flexBasis: '240px'
})
const Content = styled(Box)({
    display: 'flex',
    flexGrow: 1
})
const ContentMain = styled(Box)({
    display: 'flex',
    height: '100%',
    width: '100%',
})
const Footer = styled(Box)({
    borderTop: border
})
export default function DashboardLayout({ header, footer, sidebar, content }: Props) {
    return (
        <Col sx={{ height: '100%', width: '100%' }}>
            {header && <Header>{header}</Header>}
            <Content>
                {sidebar && <Sidebar>{sidebar}</Sidebar>}
                <ContentMain>{content}</ContentMain>
            </Content>
            {footer && <Footer>{footer}</Footer>}
        </Col>
    )
}
