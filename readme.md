# react, typescript, vite, tailwind, mantine

a small demo boilerplate on how the above tech plays together

## mantine vs tailwind

mantine and tailwind both are opinionated on how to do styles / themes. since there is no really easy way to share theme configuration, **some** things like primary color or font-family have to be duplicated and managed seperately in both theme systems.

> my preferred way is to use mantine mostly as a stepstone for rapid prototyping, and transition away from it once the team and budget scales up. for most projects you'll at some point require customization that is hard to achieve with mantine. so you'll need to build your own components anyway. for that reason we should keep vendor lockin at a minimum by using as little from mantine as possible, but as much as necessary.

### tailwind: styles

- used for all adhoc and utility styles like sizes, spacing, layout, etc, basically a full css replacement that allows you to do almost anything you can do with vanilla css
- must not include `@tailwind base`, as the base styles / reset breaks mantine components
- define all custom colors, text sizes, etc here in the theme config

### mantine: components

- used for prebuilt components
- used for css reset and base styles
- components can be abstracted by the application to provide minor customization
- copy the required values for the base theme from tailwind (primary color, font family, text size)

# vite

vite is a blazingly fast build system for client side applications. it is a replacement for create react app, that provides easier customization through a plugin system.

you can read why I prefer this over create-react-app on my blog: https://www.mostviertel.tech/blog/create-react-app-is-dead

if you need server side rendering (SEO, ...) pick nextjs instead.

# typescript

a must have, if you build anything that should end up in production
