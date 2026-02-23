---
title: Nuxt Performance Checklist for Production
description: The checks I run before shipping Nuxt pages to production.
date: 2026-02-01
tags:
  - Performance
  - Nuxt
---

## First Pass

- Ensure route-level code splitting is working.
- Defer non-critical UI sections below the fold.
- Optimize images and avoid oversized assets.

## Validation Pass

- Verify Web Vitals in realistic device conditions.
- Audit accessibility and contrast in parallel with performance checks.

## Why It Works

A repeatable checklist helps ship consistently fast pages without relying on guesswork.
