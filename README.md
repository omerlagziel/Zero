# Zero

### Notes

- Web is currently not working properly, it is a WIP.

### Demo
(Video quality isn't great, background is grey so elements are more noticeable in the actual app)
https://user-images.githubusercontent.com/85931793/143226625-d0e38239-c249-426e-a5e3-e841f870f9dd.mov


### How to run

- `$ yarn`
- Web
  - [CRA] `$ yarn workspace web-cra start`
  - [Next.js] `$ yarn workspace web-nextjs dev`
- Mobile
  - [iOS]
    - `$ cd packages/mobile/ios && pod update && pod install && cd -`
    - [CLI]
      - `$ yarn ios`
    - [Xcode]
      - `$ yarn workspace mobile start`
      - `yarn xcode`
      - Press the Run button
  - [Android]
    - [CLI]
      - `$ yarn android`
    - [Android Studio]
      - `$ yarn workspace mobile start`
      - `yarn studio`
      - Press the Run button

# Project structure

This project is a monorepo project - all parts of the app (web client, app and API) are in a single repository. For more information on how this project was initialized see [this article](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej) or [this repository](https://github.com/brunolemos/react-native-web-monorepo).

## Resources

- [NextJS and server side rendering](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)
- [NextJS and client side rendering](https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side)
- [What is GraphQL and why is it better than a Rest API?](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)
- [On NextJS Routing and AWS deployment](https://milli.is/blog/why-we-self-host-our-serverless-next-js-site-on-aws-with-terraform)
- [Serverless - AWS or Vercel? ](https://serverlesshandbook.dev/serverless-flavors/)
