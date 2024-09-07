---
title: Jolt Report
date: 2024-09-07
layout: post
---

# Jolt
> This report is under construction. Please, be patient : )

## TD;LR

The a16z crypto research and engineering teams have released an initial implementation of Jolt, a new approach to SNARK design that is up to 2x faster than the current state of the art. Jolt, the zkVm, allows developers to write programs in high-level languages like **Rust** or **Go** without needing knowledge of the underlying **SNARK** that will prove its execution. The current version reduces the overhead of verifiable computing to below 6 orders of magnitude. Future improvements on the roadmap include **Binius**, which will significantly improve Jolt's prover performance, adding more instructions, using continuations to split long computations into smaller chunks, and proof recursion.

## Key Features

- zkVM allows developers to write programs in high-level programming languages like Rust or Go **without requiring any knowledge of the underlying SNARK that will prove its execution.**
- Promises to overcome performance overhead and implementation complexity.
- Makes it faster to prove programs and easier to implement new VM instructions.
- Current implementation seems to be over 5x faster than RISC Zero and up to 2x faster than SP1 on preliminary benchmarks.
- The entire Jolt codebase is under 25,000 lines of Rust, with individual CPU instructions implemented in as few as 50 lines of code.

## Main Projects

So... what is the cool thing of Jolt? Basically, that it is designed to enhance the performance of **SNARKs**. The Jolt project builds on a new SNARK paradigm, Lasso, developed by Justin Thaler and collaborators, which aims to significantly reduce the overhead associated with zkVMs.

## Observations on the zkVM

The idea behind using Lasso SNARK paradigm is to perform efficient lookups over very large tables. This approach avoids the prohibitive costs associated with precomputing them and allows for more efficient proving of CPU instructions. They apply this technique to entire instruction sets such as RISC-V.

## Partners

While specific partners are not detailed, Jolt is part of the broader a16z crypto ecosystem, which involves close collaboration with various research and engineering teams to drive forward the development and adoption of zkVM technologies.

## Use Cases

It is designed to be used in various applications that require verifiable computing (as all of the rest). 

- Designed to help scale blockchain operations by making proof generation more efficient and reducing computational overhead.
- **General-purpose verifiable computing:** It has a flexible architecture that allows it to be applied to numerous computing scenarios where verification of computations is critical.

## Further Reading

- [Building Jolt: A fast, easy-to-use zkVM](https://a16zcrypto.com/posts/article/building-jolt/)
- [Theory to code: Building the breakthrough zkVM Jolt](https://a16zcrypto.com/posts/podcast/jolt-zkvm-breakthrough-theory-to-code/)
- [Understanding Lasso and Jolt, from theory to code](https://a16zcrypto.com/posts/article/building-on-lasso-and-jolt/)
- [Jolt, zkVMs, and speeding up blockchains](https://a16zcrypto.com/posts/videos/jolt-zkvms-and-speeding-up-blockchain/)
