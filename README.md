# webpackery
Webpack 4 Orchastration Layer allows for automated async code splitting of anything

I want to prepare for http 2 server push. To do so, Ill use Webpack and play a series of tricks on it. Hate on Webpack if you want. Ill love and respect it always <3. So Webpack will help me create this architecture, The idea will be to make the a strong infrastructure which could one day be swapped out with another build underlayer.

For the time being, It'll stay Webpack only. 

*This has been months of obsessing*
Made with love <3

**Big thanks to FaceySpacey and React-Static** 
The DM's, e-mails and calls gave me enough context to be able to build it. 

## The Problem
- Code splitting is cumbersome, requiring changes to development processes.
- No real support for LOSA Architecture 
- No holy grail efficent way to cache assets without using `externals`
- Reducing code duplication in mutiple builds is painful and ineffecient

## Goal
- Truely code split any build with no changed to codebase.
- async load any import without needing a to write promises.
- allow resources to be shared between independent builds from independent systems. 
- leverage webpack against itsslef to and trick it into handing over some control to me.

## TODO
- bespoke deliivery mechinsm, module concatination-deconcationation for delivery.
- Leverage service workers to intercept and stream code directly into a browser cache.
- Stream a multiple requests are one file, but cache each request with its coorsponding code. 
- Create chunk graph interface. teach webpack to preload next routes. 
- Create interface for asking or injecting chunks by name (`react`,`lodash`)
- Allow SSR without babel loaders or resolveWeak.
- Create instantiation reporting from the server.
- Allow asyncronus, out of order asset loading.
- Create advanced, self-correction mechinisms.

## Non-negotiables
- The user still has full control over the build. 
- Webpack builds do not need any elaborate changes
- Must be able to operate statically with no servers. 
- Architecture should be completely self contained. Requiring no more than 5 lines of code, regardless of project size
- Code-splitting with SSR should take no longer than 5 mins
- Must work seamlessly with absolutely any build & any framework
- Must be set up in a compatiable way for http 2 server push 
- Should optimize chunk delivery and reduce requests on http 1 **without needing to run any build** 

## Motivation
- Hasnt been done yet
- I want to code split an entire company in less than a day
- I already have it working, so mught as well see what happens :) 

## Establishing Results
- use react performance reporting, bind it to grafana. (ill be using this for react, but it will work with anything)
- Bind any and every event to grafana within another thread.
- Build elaborate charts and results

## Timeline
- 2 weeks watching tv at night
- Realisticly - 3 weeks till its delivered
