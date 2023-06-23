## 🚀 Init setup

> Rapidly build modern websites with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/).

### View

**[See demo](https://leandrow.github.io/init-setup)** 👀

`Tip:` You can use [HypeUI](https://www.hyperui.dev), just copy the components code.

### Dark mode

The project starts with Dark mode activated. To start with **Light mode**, follow these steps:

**/index.html**

1. Remove the `dark` class from `<html>` tag
2. Remove the `hidden` class from **moon**.svg
3. Add the `hidden` class to **sun**.svg

### VS Code

Recommended plugins

- Tailwind CSS IntelliSense
- Prettier - Code formatter

## Development

**Git clone**

```sh
git clone https://github.com/leandrow/init-setup.git
```

Enter the **project folder**

```sh
cd /init-setup
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

### What's inside?

```
Dev
|-- assets
|-- public/images
|-- styles
|
|-- index.html

Build
|-- assets
|-- images
|
|-- index.html
```

😃

**Got any suggestions to make things even better?**
[Send it here](https://github.com/leandrow/init-setup/issues)
