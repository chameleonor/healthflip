import { ListItem, ListItemButton, ListItemProps, ListItemText } from "@mui/material";
import { ReactNode } from "react";
import { Link as RouterLink } from 'react-router-dom';

interface ListItemLinkProps extends ListItemProps {
    title: string;
    to: string;
    open?: boolean;
    children?: ReactNode;
}

export function ListItemLink(props: ListItemLinkProps) {
    const { to, open, ...other } = props;
    // const primary = breadcrumbNameMap[to];

    return (
        <ListItem key={props.title} disablePadding >
            <ListItemButton component={RouterLink as any} to={to} {...other}>
                {props.children}
                <ListItemText primary={props.title} />
            </ListItemButton>
        </ListItem>
    );
}