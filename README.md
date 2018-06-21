# webpackery
Webpack 4 Orchestration Layer allows for automated async code splitting of anything

I want to prepare for HTTP 2 server push. To do so, I'll use Webpack and play a series of tricks on it. Hate on Webpack if you want. Ill love and respect it always <3. So Webpack is the catalyst for this architecture, The idea is to make a robust infrastructure which could one day be swapped out with another build underlayer.

For the time being, It'll stay Webpack only. 

*This has been months of obsessing*
Made with love <3

**Big thanks to FaceySpacey and React-Static** 
The DM's, e-mails and calls gave me enough context to be able to build it. 

## The Problem
- Code splitting is cumbersome, requiring changes to development processes.
- No real support for LOSA Architecture 
- No holy grail efficient way to cache assets without using `externals`
- Reducing code duplication in multiple builds is painful and inefficient

## Goal
- Truly code split any build with no change to the codebase.
- async load any import without needing a to write promises.
- allow resources to be shared between independent builds from independent systems. 
- leverage webpack against itself to and trick it into handing over some control to me.

## TODO
- bespoke delivery mechanism, module concatenation-deconcatenation for delivery.
- Leverage service workers to intercept and stream code directly into a browser cache.
- Stream multiple requests are one file but cache each request with its corresponding code. 
- Create chunk graph interface. Teach webpack to preload next routes. 
- Create an interface for asking or injecting chunks by name (`react`,`lodash`)
- Allow SSR without babel loaders or resolveWeak. (hopefully)
- Create instantiation reporting from the server.
- Allow asynchronous, out of order asset loading.
- Create advanced, self-correction mechanisms.

## Non-negotiables
- The user still has full control over the build. 
- Webpack builds do not need any elaborate changes
- Must be able to operate statically with no servers. 
- Architecture should be completely self-contained. Requiring no more than 5 lines of code, regardless of project size
- Code-splitting with SSR should take no longer than 5 mins
- Must work seamlessly with absolutely any build & any framework
- Must be set up in a compatible way for HTTP 2 server push 
- Should optimize chunk delivery and reduce requests on HTTP 1 **without needing to run any build** 

## Motivation
- Hasn't been done yet
- I want to code split an entire company in less than a day
- I already have it working, so might as well see what happens :) 

## Establishing Results
- use react performance reporting, bind it to grafana. (ill be using this for react, but it is framework agnosticwith anything)
- Bind any and every event to grafana within another thread.
- Build elaborate charts and results

## Timeline
- 2 weeks watching tv at night
- Realistically - 3 weeks till its delivered
