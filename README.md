<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">Git Skills</h1>
<p align="center">
	Git Skills is a visual overview of useful skills to learn as a developer. Go to <a href="https://andreasbm.github.io/web-skills" target="_blank" aria-label="Link to Web Skills">https://andreasbm.github.io/web-skills</a> to check out the visual overview or scroll through this readme to get the overview <a href="#-fundamentals" target="_blank" aria-label="Link to list of skills">as a list</a>. If you like the project you are very welcome to <a href="https://github.com/andreasbm/web-skills/stargazers" aria-label="Become stargazer link">become a stargazer 🤩</a>
</p> 
<p align="center">
	<a href="http://andreasbm.github.io/web-skills" target="_blank">
		<img src="https://raw.githubusercontent.com/andreasbm/web-skills/master/demo.gif" alt="Web Skills Demo" width="800" />
	</a>
</p>
<br />
<details>
<summary>📖 Table of Contents</summary>
<br />

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ Table of Contents

- [➤ FAQ](#-faq)
  - [What is Web Skills?](#what-is-web-skills)
  - [How did you choose the skills?](#how-did-you-choose-the-skills)
  - [How can I support you?](#how-can-i-support-you)
  - [How can I get involved?](#how-can-i-get-involved)
  - [How can I keep track of what skills I know?](#how-can-i-keep-track-of-what-skills-i-know)
  - [I am overwhelmed! Help me!](#i-am-overwhelmed-help-me)
  - [Why haven't you included XYZ Technology?](#why-havent-you-included-xyz-technology)
  - [What does the "experimental" banner mean?](#what-does-the-experimental-banner-mean)
  - [How can I get in contact with you?](#how-can-i-get-in-contact-with-you)
- [➤ Fundamentals](#-fundamentals)
  - [HTML](#html)
  - [Syntax](#syntax)
    - [Basic Tags](#basic-tags)
  - [Forms](#forms)
  - [SEO](#seo)
    - [Discoverable Content](#discoverable-content)
  - [Svg](#svg)
  - [Best Practices](#best-practices)
  - [CSS](#css)
  - [Syntax](#syntax-1)
  - [Selectors](#selectors)
    - [Specificity](#specificity)
    - [Pseudo Selectors](#pseudo-selectors)
  - [Box Model](#box-model)
    - [Margin Collapsing](#margin-collapsing)
  - [Colors](#colors)
  - [Calc](#calc)
  - [Layout](#layout)
    - [Flex](#flex)
    - [Grid](#grid)
  - [Transforms](#transforms)
    - [Animations](#animations)
  - [Responsive Design](#responsive-design)
    - [Media Queries](#media-queries)
    - [Relative Units](#relative-units)
    - [Images](#images)
  - [CSS Variables](#css-variables)
  - [Best Practices](#best-practices-1)
  - [Javascript](#javascript)
  - [Syntax](#syntax-2)
    - [Spread](#spread)
    - [Destructuring](#destructuring)
  - [DOM](#dom)
    - [DOM Manipulation](#dom-manipulation)
  - [Events](#events)
  - [Objects](#objects)
    - [Prototype](#prototype)
      - [Classes](#classes)
  - [Regex](#regex)
  - [Template Literals](#template-literals)
  - [Promises](#promises)
    - [Callbacks](#callbacks)
    - [Async/await](#asyncawait)
    - [Fetch](#fetch)
  - [Web Animations](#web-animations)
  - [Modules](#modules)
  - [Intl](#intl)
  - [Canvas](#canvas)
  - [Documentation](#documentation)
  - [Best Practices](#best-practices-2)
  - [The Browser](#the-browser)
  - [Standardization](#standardization)
    - [W3C](#w3c)
    - [TC39](#tc39)
    - [WHATWG](#whatwg)
    - [Specifications](#specifications)
  - [Browser Engines](#browser-engines)
    - [Webkit](#webkit)
    - [Blink](#blink)
    - [Gecko](#gecko)
  - [HTTP](#http)
  - [The Internet](#the-internet)
  - [Polyfills](#polyfills)
  - [Debugging](#debugging)
    - [Developer console](#developer-console)
- [➤ Accessibility](#-accessibility)
  - [The why](#the-why)
  - [Screen Readers](#screen-readers)
  - [Accessibility tree](#accessibility-tree)
    - [ARIA](#aria)
    - [Accessible HTML](#accessible-html)
      - [Alt text](#alt-text)
    - [Accessible CSS](#accessible-css)
  - [Accessible forms](#accessible-forms)
  - [UI States](#ui-states)
  - [Keyboard Accessibility](#keyboard-accessibility)
    - [Focus](#focus)
  - [Accessible Colors](#accessible-colors)
  - [Laws & Policies](#laws--policies)
    - [Audits](#audits)
- [➤ Web Components](#-web-components)
  - [Custom Elements](#custom-elements)
  - [HTML Templates](#html-templates)
  - [Shadow DOM](#shadow-dom)
    - [Shadow Parts](#shadow-parts)
    - [Slots](#slots)
  - [Best practices](#best-practices)
  - [Constructible Stylesheets](#constructible-stylesheets)
  - [Form Participation](#form-participation)
- [➤ Progressive Webapps](#-progressive-webapps)
  - [API's](#apis)
  - [Storage](#storage)
  - [Routing](#routing)
    - [History API](#history-api)
  - [Service Workers](#service-workers)
    - [Offline first](#offline-first)
    - [Push notifications](#push-notifications)
  - [Web App manifest](#web-app-manifest)
  - [Add to homescreen](#add-to-homescreen)
  - [Pointer Events](#pointer-events)
  - [Loading Performance](#loading-performance)
  - [App shell](#app-shell)
  - [Render-Blocking Resources](#render-blocking-resources)
  - [Compression](#compression)
  - [Performance metrics](#performance-metrics)
    - [Largest Contentful Paint](#largest-contentful-paint)
    - [Total Blocking Time](#total-blocking-time)
    - [Time to Interactive](#time-to-interactive)
  - [Lazy Loading](#lazy-loading)
    - [Dynamic Import](#dynamic-import)
    - [Offscreen images](#offscreen-images)
  - [Critical Request Chains](#critical-request-chains)
  - [Tree shaking](#tree-shaking)
  - [Codesplitting](#codesplitting)
  - [PRPL Pattern](#prpl-pattern)
  - [Resource Prioritization](#resource-prioritization)
  - [Caching](#caching)
  - [Rendering Performance](#rendering-performance)
  - [Rendering](#rendering)
  - [Event loop](#event-loop)
    - [Microtask](#microtask)
    - [Stack](#stack)
    - [Heap](#heap)
  - [RAIL Model](#rail-model)
    - [requestAnimationFrame](#requestanimationframe)
    - [requestIdleCallback](#requestidlecallback)
  - [Critical Rendering Path](#critical-rendering-path)
  - [The Pixel Pipeline](#the-pixel-pipeline)
    - [Style calculations](#style-calculations)
    - [Transforms](#transforms-1)
    - [Paint areas](#paint-areas)
    - [Layout Trashing](#layout-trashing)
    - [Layers](#layers)
    - [Debounce](#debounce)
  - [CSS Containment](#css-containment)
  - [Web Workers](#web-workers)
  - [Security](#security)
  - [HTTPS](#https)
  - [Browser Sandbox](#browser-sandbox)
  - [OWASP](#owasp)
    - [Cross-Site Scripting](#cross-site-scripting)
    - [Clickjacking](#clickjacking)
  - [Content Security Policy](#content-security-policy)
  - [Audits](#audits-1)
  - [Performance budgets](#performance-budgets)
  - [Lighthouse](#lighthouse)
  - [Chrome DevTools](#chrome-devtools)
- [➤ Build tools](#-build-tools)
  - [Package Managers](#package-managers)
    - [NPM](#npm)
    - [Yarn](#yarn)
  - [Module Bundlers](#module-bundlers)
    - [Rollup](#rollup)
    - [Webpack](#webpack)
    - [Parcel](#parcel)
    - [Snowpack](#snowpack)
  - [Linters and formatters](#linters-and-formatters)
    - [Prettier](#prettier)
    - [ESLint](#eslint)
  - [Task Runners](#task-runners)
    - [NPM Scripts](#npm-scripts)
  - [Transpilers](#transpilers)
    - [Babel](#babel)
    - [Typescript](#typescript)
  - [CSS Pre-processors](#css-pre-processors)
    - [SASS](#sass)
    - [PostCSS](#postcss)
  - [Node.js](#nodejs)
- [➤ Frameworks & Libraries](#-frameworks--libraries)
  - [lit-element](#lit-element)
  - [Vue](#vue)
  - [React](#react)
  - [Angular](#angular)
  - [Svelte](#svelte)
  - [Stencil](#stencil)
- [➤ Testing](#-testing)
  - [Testing Methodologies](#testing-methodologies)
    - [Unit Testing](#unit-testing)
    - [Integration Testing](#integration-testing)
    - [System Testing](#system-testing)
    - [Acceptance Testing](#acceptance-testing)
    - [Smoke Testing](#smoke-testing)
    - [Performance Testing](#performance-testing)
    - [Usability Testing](#usability-testing)
    - [White Box Testing](#white-box-testing)
    - [Black Box Testing](#black-box-testing)
    - [Automated Testing](#automated-testing)
    - [Manual Testing](#manual-testing)
  - [Continuous integration](#continuous-integration)
  - [A/B Testing](#ab-testing)
  - [Test Runners](#test-runners)
    - [Karma](#karma)
    - [Mocha](#mocha)
    - [Jasmine](#jasmine)
    - [Cypress](#cypress)
    - [Ava](#ava)
  - [Best Practices](#best-practices-3)
- [➤ Architecture & paradigms](#-architecture--paradigms)
  - [Paradigms](#paradigms)
  - [Programming Paradigms](#programming-paradigms)
  - [Object Oriented Programming](#object-oriented-programming)
    - [S.O.L.I.D](#solid)
  - [Functional programming](#functional-programming)
    - [Recursion](#recursion)
    - [Higher-Order Functions](#higher-order-functions)
    - [Currying](#currying)
    - [Monads](#monads)
  - [Architecture](#architecture)
  - [Design Patterns](#design-patterns)
    - [Singleton](#singleton)
    - [Observer](#observer)
    - [Prototype](#prototype-1)
    - [Bridge](#bridge)
    - [Proxy](#proxy)
    - [Chain of responsibility](#chain-of-responsibility)
    - [Constructor](#constructor)
  - [CSS Methodologies](#css-methodologies)
    - [BEM](#bem)
    - [SMACSS](#smacss)
    - [OOCSS](#oocss)
- [➤ Team Collaboration](#-team-collaboration)
  - [Version Control](#version-control)
  - [Git](#git)
    - [Github](#github)
    - [Bitbucket](#bitbucket)
  - [Management](#management)
  - [Agile Development](#agile-development)
    - [Scrum](#scrum)
    - [Kanban](#kanban)
  - [Waterfall Development](#waterfall-development)
  - [Test Driven Development](#test-driven-development)
- [➤ Design & UX](#-design--ux)
  - [Color Theory](#color-theory)
    - [Color Wheel](#color-wheel)
  - [Typography](#typography)
    - [Font Size](#font-size)
    - [Line Spacing](#line-spacing)
  - [C.R.A.P](#crap)
    - [Contrast](#contrast)
    - [Repetition](#repetition)
    - [Alignment](#alignment)
    - [Proximity](#proximity)
  - [Consistency](#consistency)
  - [Spacing](#spacing)
  - [Error Handling](#error-handling)
  - [Loading](#loading)
  - [The Golden Ratio](#the-golden-ratio)
  - [Mobile First](#mobile-first)
    - [Hit Targets](#hit-targets)
  - [Design Systems](#design-systems)
    - [Material Design](#material-design)
    - [Fluent Design](#fluent-design)
  - [Accessibility](#accessibility)
  - [Best Practices](#best-practices-4)
- [➤ The Modern Web](#-the-modern-web)
  - [Streams](#streams)
    - [Media Streams](#media-streams)
    - [Media Recorder](#media-recorder)
    - [Web RTC](#web-rtc)
    - [Screen Capture](#screen-capture)
    - [Generators](#generators)
  - [Speech Synthesis](#speech-synthesis)
  - [Web Sockets](#web-sockets)
  - [Geolocation](#geolocation)
  - [Device orientation & motion](#device-orientation--motion)
  - [Fullscreen](#fullscreen)
  - [Variable Fonts](#variable-fonts)
  - [HTTP/2](#http2)
  - [Payment Request API](#payment-request-api)
  - [Web Audio](#web-audio)
  - [Observers](#observers)
    - [Mutation Observer](#mutation-observer)
    - [Intersection Observer](#intersection-observer)
    - [Resize Observer](#resize-observer)
    - [Performance Observer](#performance-observer)
  - [Scrollsnapping](#scrollsnapping)
  - [Web Assembly](#web-assembly)
  - [Beacon](#beacon)
  - [Clipboard](#clipboard)
  - [Share](#share)
  - [Performance API](#performance-api)
  - [Gamepad API](#gamepad-api)
  - [Speech Recognition](#speech-recognition)
  - [Interaction Media Queries](#interaction-media-queries)
  - [Browser Extensions](#browser-extensions)
  - [Pointer Lock API](#pointer-lock-api)
  - [Picture In Picture](#picture-in-picture)
  - [Proxies](#proxies)
  - [Houdini](#houdini)
  - [Project Fugu](#project-fugu)
  - [Web Authentication API](#web-authentication-api)
    - [Credentials Manager API](#credentials-manager-api)
  - [Native File System](#native-file-system)
  - [Shape Detection](#shape-detection)
  - [Web Bluetooth](#web-bluetooth)
  - [Web USB](#web-usb)
  - [Web XR](#web-xr)
  - [Presentation](#presentation)
  - [Network Information API](#network-information-api)
- [➤ Algorithms & Data structures](#-algorithms--data-structures)
  - [Data structures](#data-structures)
  - [Arrays](#arrays)
  - [Queues & Stacks](#queues--stacks)
  - [Trees](#trees)
    - [Binary Indexed Tree](#binary-indexed-tree)
    - [Heap](#heap-1)
    - [Red-black Tree](#red-black-tree)
    - [Trie](#trie)
    - [K-D Tree](#k-d-tree)
  - [Hash Tables](#hash-tables)
  - [Linked Lists](#linked-lists)
  - [Graphs](#graphs)
  - [Analysis](#analysis)
  - [Time complexity](#time-complexity)
    - [Cost model](#cost-model)
    - [Order of Growth](#order-of-growth)
    - [Big O notation](#big-o-notation)
  - [Space Complexity](#space-complexity)
  - [Algorithms](#algorithms)
  - [Sorting](#sorting)
    - [Insertion Sort](#insertion-sort)
    - [Quicksort](#quicksort)
    - [Mergesort](#mergesort)
    - [Heapsort](#heapsort)
  - [Searching](#searching)
    - [Binary Search](#binary-search)
    - [Breadth First Search](#breadth-first-search)
    - [Depth First Search](#depth-first-search)
    - [Dijkstra's Algorithm](#dijkstras-algorithm)
    - [String Search](#string-search)
  - [Hashing](#hashing)
- [➤ Databases & Servers](#-databases--servers)
  - [Databases](#databases)
  - [Relational Databases](#relational-databases)
    - [SQL](#sql)
    - [MySQL](#mysql)
    - [PostgreSQL](#postgresql)
  - [Non-relational Databases](#non-relational-databases)
    - [Redis](#redis)
    - [MongoDB](#mongodb)
  - [Data Modelling](#data-modelling)
    - [ER Diagram](#er-diagram)
    - [Keys](#keys)
  - [Indexing](#indexing)
  - [Data Integrity](#data-integrity)
  - [Normalization](#normalization)
    - [Functional Dependencies](#functional-dependencies)
    - [Normal Forms](#normal-forms)
  - [Transactions](#transactions)
    - [ACID](#acid)
    - [Serializability](#serializability)
    - [Locks](#locks)
      - [Deadlocks](#deadlocks)
    - [Precedence graph](#precedence-graph)
  - [Servers](#servers)
  - [Architectural Models](#architectural-models)
    - [Client-Server](#client-server)
    - [Proxy Server](#proxy-server)
    - [Peer-To-Peer](#peer-to-peer)
  - [Middleware](#middleware)
  - [Request-Reply Protocol](#request-reply-protocol)
    - [UDP](#udp)
    - [TCP](#tcp)
  - [REST API](#rest-api)
    - [CRUD](#crud)
  - [Express](#express)
  - [GraphQL](#graphql)
  - [GNU/Linux](#gnulinux)
  - [Docker](#docker)
  - [SSH](#ssh)
- [➤ Contributors](#-contributors)
- [➤ License](#-license)
</details>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#faq)

## ➤ FAQ

### What is Git Skills?

Git Skills is a visual overview of useful skills to learn as a developer. It is useful for people who just started learning about Git commands. As a beginner, I would encourage you to see this website as an example of what you can learn and where you can start. The skills are arranged in chronological order based on what learning path I recommend you to take but feel free to jump around freely.

### How did you choose the skills?

We have selected the most basic Git commands.

### How can I get involved?

You are welcome to get involved in any way you like. If you want to, you can go to the [issues page](https://github.com/openSW-team3/eduGit-Github/issues) and help us fix the spelling, fix issues or suggest some new features. Any involvement is highly appreciated!

### How can I keep track of what skills I know?

If you scroll to the bottom of the page, you will find a button that says "Sign in with Google". If you click this button and sign in, you will be able to mark skills as completed.

### Why are there no other Git commands?

Since only basic commands are included, new commands will be added in future maintenance.

### How can I get in contact with you?

Please look up the people of the organization on the corresponding GitHub homepage.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#fundamentals)

## ➤ Git 프로젝트 생성하기, 가져오기

### git init

Learn the basics of HTML and get comfortable with it's syntax and main concepts.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git scm - init](https://git-scm.com/docs/git-init)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git tutorial - init](https://backlog.com/git-tutorial/kr/intro/intro2_3.html)

#### git clone

Get familiar with the basic HTML tags

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git scm - clone](https://git-scm.com/docs/git-clone)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> Git tutorial - clone](https://backlog.com/git-tutorial/kr/intro/intro3_2.html)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#accessibility)

## ➤ Snapshot 스냅샷 다루기

### git add

Learn what accessibility is and why it is important.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git scm - add](https://git-scm.com/docs/git-add)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Git tutorial - add](https://backlog.com/git-tutorial/kr/reference/basic.html#sec2)

### git status

Learn about assistive technology such as screen readers that reads sections of the page aloud based on the current focus.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> Git scm - status](https://git-scm.com/docs/git-status)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> Git tutorial - status](https://backlog.com/git-tutorial/kr/reference/basic.html#sec4)

### git diff

Learn about the accessibility tree and how assistive technology uses it.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git scm - diff](https://git-scm.com/docs/git-diff)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git tutorial - diff](https://backlog.com/git-tutorial/kr/reference/basic.html#sec5)

#### git commit

Learn how to use ARIA descriptions an labels to help assistive technology understanding your website.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git scm - commit](https://git-scm.com/docs/git-commit)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git tutorial - commit](https://backlog.com/git-tutorial/kr/reference/basic.html#sec3)

#### git reset

Learn how to write HTML in such as way that assistive technology better understands it.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git scm - reset](https://git-scm.com/docs/git-reset)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git tutorial - reset](https://backlog.com/git-tutorial/kr/reference/basic.html#sec12)

##### git clean

Learn how to use the alt attribute to provide a useful text alternative to this image.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git scm - clean](https://git-scm.com/docs/git-clean)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Git tutorial - clean](https://backlog.com/git-tutorial/kr/reference/basic.html#sec10)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#web-components)

## ➤ Branch와 Merge

### git branch

Learn how to create new HTML tags with Custom Elements.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git scm - branch](https://git-scm.com/docs/git-branch)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git tutorial - branch](https://backlog.com/git-tutorial/kr/reference/branch.html)

### git merge

Learn how to use HTML templates to create flexible templates that can then be used to populate the Shadow DOM.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git scm - merge](https://git-scm.com/docs/git-merge)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> Git tutorial - merge](https://backlog.com/git-tutorial/kr/reference/branch.html#sec6)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#progressive-webapps)

## ➤ Log

### git log

Learn how to store data for your web app.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git scm - log](https://git-scm.com/docs/git-log)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git tutorial - log](https://backlog.com/git-tutorial/kr/reference/basic.html#sec6)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#build-tools)

## ➤ 공유 & 업데이트

### git fetch

Learn about package managers and how they make managing dependencies easier.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - How JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.javascriptstuff.com" alt="Logo" /> Guide to JavaScript frontend package managers](https://www.javascriptstuff.com/javascript-frontend-package-managers/)

#### git pull

Learn about NPM and how it can be used to manage dependencies.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.npmjs.com" alt="Logo" /> npmjs - About npm](https://docs.npmjs.com/about-npm/)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.npmjs.com" alt="Logo" /> npmjs - Getting started](https://docs.npmjs.com/getting-started/)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Introduction to npm and basic npm commands](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-npm-and-basic-npm-commands-18aa16f69f6b)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodesource.com" alt="Logo" /> An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

#### git push

Learn about Yarn and how it can be used to manage dependencies.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fyarnpkg.com" alt="Logo" /> Yarnpkg - Getting Started](https://yarnpkg.com/en/docs/getting-started)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fengineering.fb.com" alt="Logo" /> Facebook Engineering - Yarn](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)

### git remote

Learn about module bundler and how they can help bundling your code.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - What is a module bundler?](https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - Let’s learn how module bundlers work](https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> JavaScript Bundlers, a Comparison](https://medium.com/@ajmeyghani/javascript-bundlers-a-comparison-e63f01f2a364)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#testing)

## ➤ 임시 저장

### git stash

Learn about various software testing methodologies and why it is important to test your code.

- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Software testing](https://en.wikipedia.org/wiki/Software_testing)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsmartbear.com" alt="Logo" /> Software Testing Methodologies](https://smartbear.com/learn/automated-testing/software-testing-methodologies/)
- [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.inflectra.com" alt="Logo" /> Learn The Methods & Tools](https://www.inflectra.com/ideas/topic/testing-methodologies.aspx)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors

| [<img alt="Andreas Mehlsen" src="https://avatars1.githubusercontent.com/u/6267397?s=460&v=4" width="100">](https://twitter.com/andreasmehlsen) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
|                                             [Andreas Mehlsen](https://twitter.com/andreasmehlsen)                                              |                                 [You?](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md)                                  |
|                                                                       🔥                                                                       |                                                                                                                                          |

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License

Licensed under [MIT](https://opensource.org/licenses/MIT).
