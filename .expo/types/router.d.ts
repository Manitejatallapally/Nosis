/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Library` | `/Library`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Search` | `/Search`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Library` | `/Library`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Search` | `/Search`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Home${`?${string}` | `#${string}` | ''}` | `/Home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Library${`?${string}` | `#${string}` | ''}` | `/Library${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Search${`?${string}` | `#${string}` | ''}` | `/Search${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Library` | `/Library`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Search` | `/Search`; params?: Router.UnknownInputParams; };
    }
  }
}