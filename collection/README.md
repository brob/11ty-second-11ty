# Readme for Collection example

A simple 11ty site for showcasing the basics of Collections. This is used for [this 11ty Second 11ty Video](https://www.youtube.com/watch?v=7G5m6RDZ6cU).

## Installation

```bash
npm install
```

## Running

```bash
npx eleventy --serve
```

When you add a new post to `/posts` with a frontmatter `tags` property, it will add to the posts collection and appear on the homepage with the loop.

```md
---
title: "Your new blog post"
tags: "posts"
---
```