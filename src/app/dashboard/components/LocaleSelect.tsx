import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function LocaleSelect() {
    const { i18n } = useTranslation();
    const handleChange = (e: SelectChangeEvent) => {
        localStorage.setItem('lang', e.target.value)
        i18n.changeLanguage(e.target.value);
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.dir();
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={i18n.language}
                variant="standard"
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value='ar'>العربية</MenuItem>
                <MenuItem value='en'>English</MenuItem>
            </Select>
        </FormControl>

    )
}
