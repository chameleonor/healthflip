import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export function Orders() {
    const [value, setValue] = useState('one');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (<>
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
            </Tabs>
        </Box></>)
}