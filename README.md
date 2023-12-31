## ![Rocket icon](dev/public/images/rocket-launch.svg) Init landing page

> Rapidly build modern landing pages with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/).

### Usage examples

- **[example page](https://init-landing-page.vercel.app/page/)**
- **[personal page](https://leandrow.github.io)**

`Tip:` Use [HypeUI](https://www.hyperui.dev) by simply copying the components code.

### Dark mode

Set mode: dark or light

1. Open the `/assets/darkmode.js`
2. Set `localStorage.theme = ''`

If left blank, the mode will be based on OS preferences

### VS Code

Recommended plugins

- Tailwind CSS IntelliSense
- Sass (.sass only)
- Prettier - Code formatter

## Development

**Git clone**

```sh
git clone https://github.com/leandrow/init-landing-page.git
```

Enter the **project folder**

```sh
cd init-landing-page
```

**Install dependencies** with [pnpm](https://pnpm.io/)

```sh
pnpm install
```

**To run**

```sh
npm run dev
```

**To build**

```sh
npm run build
```

```sh
npm run preview
```

## What's inside?

```
Dev
|-- assets
|-- page
|-- public/images
|-- styles
|
|-- index.html

Build
|-- assets
|-- images
|-- page
|
|-- index.html
```

We also added a customized `404.html` (page not found) for Github pages in the `dev/public` folder.

## Contributing

Got any suggestions to make things even better?

[Send it here](https://github.com/leandrow/init-landing-page/issues) or create a **new pull request.**
