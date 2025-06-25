import React, { useState } from 'react';
import { IconButton, Stack, Menu, MenuItem, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function NavToggles({ mode, toggleTheme, languages, i18n }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const langCode = (i18n.language || 'en').split('-')[0];
  const currentLang = languages.find((l) => l.code === langCode) || languages[0];
  const otherLanguages = languages.filter((l) => l.code !== i18n.language);

  const handleLangClick = (event) => setAnchorEl(event.currentTarget);
  const handleLangClose = () => setAnchorEl(null);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    handleLangClose();
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton onClick={handleLangClick} sx={{ p: 1.5 }}>
        <Box
          component="img"
          src={currentLang.flag}
          alt={currentLang.code}
          sx={{ width: 32, height: 32, borderRadius: '50%' }}
        />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLangClose}>
        {otherLanguages.map(({ code, flag }) => (
          <MenuItem key={code} onClick={() => changeLanguage(code)}>
            <Box component="img" src={flag} alt={code} sx={{ width: 28, height: 28, borderRadius: '50%', mr: 1 }} />
            {code.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>

      <IconButton onClick={toggleTheme} color="inherit" sx={{ p: 1.5 }}>
        {mode === 'dark' ? <Brightness7Icon sx={{ fontSize: 28 }} /> : <Brightness4Icon sx={{ fontSize: 28 }} />}
      </IconButton>
    </Stack>
  );
}
