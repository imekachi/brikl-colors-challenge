# Brikl colors challenge by Saran Weerakun

## Commands
### Install dependencies
```bash
$ yarn
```

### Start Dev
Simply run
```bash
$ yarn dev
```

### Run tests
```bash
$ yarn test
```
### Build for production (with node server)
Run this command
```bash
$ yarn build
```
The output will be in `.next` folder.

### Build for production (static can host like normal react project)
Run this command
```bash
$ yarn build:static
```
The output will be in `out` folder.

### Generate a colorFormatter
```bash
# the name should be in lowercase
$ yarn generate colorFormatter <name>
```

### Generate a component
```bash
$ yarn generate component <ComponentName> [<path>]
```

### Generate a component css module file
```bash
$ yarn generate style <ComponentName> [<path>]
```

# How to add a new color format to the API?
1. run the generate command for the new colorFormatter
    ```bash
    $ yarn generate colorFormatter <name> 
    ```
    For example, if you want to add a new SWAG color format, you would type
    ```bash
    $ yarn generate colorFormatter swag
    ```

1. you should see `swag.ts` and `swag.test.ts` files in `src/service/color/formatters/` directory

1. write your test in the `swag.test.ts` file and implement your format logic in the `swag.ts` file

1. register your formatter to the `colorFormatterMap` variable in `src/service/color/formatter.ts`

    For example, the new SWAG formatter should be added like this
    ```ts
    // Register formatters
    export const colorFormatterMap = {
      RGB: RgbFormatter,
      // ...
      SWAG: SwagFormatter,
      // add new format here
    } as const
    ```

1. Done!
