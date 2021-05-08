# ng-micro-frontends-demo

Illustrates two micro frontends built with Angular and WebPack's Module Federation.

For more detailed description check out the [article here](https://ievgen.de/2021/05/08/angular-micro-frontend/) or go to the [original project](https://github.com/module-federation/module-federation-examples/tree/master/angular11-microfrontends) it's been taken from.

To run the example please run two projects.

## Calendar (micro frontend)

```*.sh
cd calendar
npm install
yarn install
ng serve
```

open the project under `http://localhost:4201/Calendar`.

## Company (shell application that loads micro frontend)

```*.sh
cd company
npm install
ng serve
```

open the project under `http://localhost:4200/`.
Use top menu to navigate to `calendar` module, which will be loaded remotely.
