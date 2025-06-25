import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

export default function NavButtons({ navItems, isHomePage }) {
  const location = useLocation();

  return (
    <Stack direction="row" spacing={4} alignItems="center">
      {navItems.map(({ text, section, route, isExternal, offset }) => {
        const isActiveRoute = location.pathname === route;

        if (isExternal) {
          return (
            <Typography
              key={text}
              component={RouterLink}
              to={route}
              sx={{
                fontWeight: 500,
                textDecoration: isActiveRoute ? 'underline' : 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              {text}
            </Typography>
          );
        }

        if (isHomePage) {
          return (
            <ScrollLink
              key={text}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={offset}
              activeClass="active-nav"
              style={{ cursor: 'pointer' }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  color: 'inherit',
                  '&.active-nav': {
                    textDecoration: 'underline',
                    // fontWeight: 700, // removed for consistent font weight
                  },
                }}
              >
                {text}
              </Typography>
            </ScrollLink>
          );
        }

        return (
          <Typography
            key={text}
            component={RouterLink}
            to={route}
            sx={{
              fontWeight: 500,
              textDecoration: isActiveRoute ? 'underline' : 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            {text}
          </Typography>
        );
      })}
    </Stack>
  );
}
