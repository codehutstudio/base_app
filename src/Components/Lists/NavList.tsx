import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { LinkConfig } from '../../AppTypes';
import Icons from '../Icons';
import { useRecoilValue } from 'recoil';
import { appStateAtom } from '../../AppState';
import { useNavigate, useLocation } from "react-router-dom";

export interface Props {
    links: LinkConfig[]
}
export default function NavList({ links }: Props) {
    return (
        <List sx={{ p: 0 }}>
            {links.map(({ link, label, children }: LinkConfig) => children ? "" : <SingleLink key={link} link={link} label={label} />)}
        </List>
    )
}

const SingleLink = ({ link, label }: { link: string, label: string }) => {
    const {icons} = useRecoilValue(appStateAtom)
    let navigate = useNavigate()
    let location = useLocation()
    const [isActive, setIsActive] = useState(false)
    const goto = () => {
        navigate(link)
    }
    useEffect(() => {
        setIsActive(location.pathname.endsWith(link))
    }, [location])

    return (
        <ListItemButton divider onClick={goto}>
            <ListItemIcon sx={{ minWidth: '30px' }}>
                <Icons icon={icons[label as keyof typeof icons]} color={isActive ? "primary": 'grey'} />
            </ListItemIcon>
            <ListItemText primary={label} primaryTypographyProps={{
                    color: isActive ? 'primary' : 'grey',
                    fontWeight: isActive ? 'bold' : 'inherit'
            }} />
        </ListItemButton>
    )
}