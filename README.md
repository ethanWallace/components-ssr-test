## GCDS components SSR in Next.js test app

Next.js application to test the functionality of the expermental `gcds-components-ssr` being developed on the [gcds-components-ssr GitHub branch](https://github.com/cds-snc/gcds-components/tree/gcds-components-ssr).

## Getting Started

### gcds-components

Please follow the following instructions to setup the `gcds-components-ssr` to use within the Next.js app.

With a local installation of [gcds-components](https://github.com/cds-snc/gcds-components/tree/gcds-components-ssr) install both packages.

Install both `packages/web` and `packages/ssr`. Run in each directory separately.

```bash
npm i
```

Apply patch to stencil from `packages/web` directory.

```bash
npm run patch:stenciljs
```

Build both `packages/web` and `packages/ssr`. Run in each directory separately.

```bash
npm run build
```

Create link to the `gcds-components-ssr` package. Run in the `packages/ssr` directory.

```bash
npm link
```

Continue on to the Next.js app setup.

### Nextjs app

Create link to `gcds-components-ssr` package.

```bash
npm link @cdssnc/gcds-components-ssr
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
