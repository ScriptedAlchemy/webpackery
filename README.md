# webpackery
Webpack 4 Orchestration Layer allows for automated async code splitting of anything

>*Webpack is an amazing crutch while I build a sophisicated architecture - This Orchastration layer will soon be completely standalone & plug-n-play with with other budlers.* 

I want to prepare for HTTP 2 server push. To do so, I'll use Webpack and play a series of tricks on it. Hate on Webpack if you want. Ill love and respect it always <3. So Webpack is the catalyst for this architecture, The idea is to make a robust infrastructure which could one day be swapped out with another build underlayer.

For the time being, It'll stay Webpack only. 

*This has been months of obsessing*
Made with love <3 
Welcome to the *Unbundling* 

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
- Stream multiple requests as one file but cache each request with its corresponding code. 1 request = 5 cached modules
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
- I already have it working, so might as well take it up a level and see what happens :) 

## Establishing Results
- Use react performance reporting, bind it to grafana. (ill be using this for react, but it is framework agnosticwith anything)
- Bind any and every event to grafana within another thread.
- Build elaborate charts and results

## Timeline
Changed due to enhanced infrastructure. 
- 4 weeks watching tv at night
- Realistically - 5 - 8 weeks till its delivered
That's the idea, but I work on many things. 

## Known challanges

**Many script tags are hard to thread and compile client side**

Ill have a two-way concatenation-deconcatenation threaded worker. I can retrieve chunk(s) and either concatenate the modules OR deconcatenate them. If the browser asks for 9 assets, the worker truncates the calls of 8, then join the modules into the 9th "asset" and return it. The other consideration is a fake script call each time which is populated with a buffer. I'll be able to cache each asset on its own via SW APIs to browser caches, how the last mile delivery happens does not matter, as long as its blazing fast.

**One thread gets stuck, what happens?**

I can make webpack error correct further and use other modules on the page to query the status. Worst case I will ask another module to retrieve it and the web-worker will truncate the current call. I might open a stream, so there is never a delay on cache misses this won't work for CDNs though. 

**Its never been done, so how are you going to do it**

http://worrydream.com/LadderOfAbstraction/

**How do you stop the download of unexecuted code?**

I have and will extend / PR webpack with additional architectural metadata on the dependency graph - if need be. Before asking for the resource, a separate worker will resolve the existing execution chain - via reporting mechanics. 

**What about IE 9/10**

What is the marital status of the number 5? *A Reference to quantum mechanics super-positions - Question doesn't even make sense to ask*

## Framework Specific Issues
Any issues that Frameworks cause

### React

**Cant render async**

Many ways to fix this. RUC, Async Redux, Shallow Render In Threads, Hoist React17 Reconciliation, closed loop module patching. Tricky, but don't see what the big issue is beyond just sitting down and making it happen.

