---
title: Succinct Report
date: 2024-09-07
layout: post
---

# Succinct

> Still in development. May be subject to changes : )

# TD;LR

> Succinct Processor 1 (SP1) is a first-generation zkVM that verifies the execution of arbitrary Rust programs or any programs compiled with LLVM (low-level Virtual Machine). It is designed as a public good that is 100% open-source and welcomes contributors.


They have one big problem which is **SP1,** but also SP1 Reth (which is a zkEVM) and Succinct Network.

# **Main Projects**

Succinct is primarily focused on developing the SP1 (Succinct Processor 1) zkVM and a decentralized prover network. The SP1 zkVM is designed to verify the execution of arbitrary Rust (or any LLVM-compiled language) programs, aiming to match the performance of specialized circuit-based approaches. This zkVM is fully open-source and intended to make zero-knowledge proofs (ZKPs) accessible to all developers. Additionally, Succinct is working on a decentralized prover network that will allow applications to outsource proof generation efficiently and economically.

# **Key Features**

1. **High Performance:** SP1 is engineered to provide state-of-the-art performance, achieving up to 30x faster speeds for certain programs compared to existing zkVMs. It is based on a precompile-centric architecture, allowing for modular and customizable performance enhancements.
2. **Open-Source and Contributor-Friendly:** SP1 is 100% open-source, with a focus on community contributions and a modular architecture that can be customized to meet various needs.
3. **Unified Proof Supply Chain:** The Succinct protocol provides a resilient and unified proof supply chain, enabling efficient and scalable proof generation across a decentralized network of provers.

### Relevant

- [Plonky3](https://github.com/Plonky3/Plonky3): Prover is powered by the Plonky3 toolkit.
- [Valida](https://github.com/valida-xyz/valida): Cross-table lookup architecture, prover, borrow macro, and chip design are inspired by Valida.
- [RISC0](https://github.com/risc0/risc0): Rust toolchain and install/build scripts for the toolchain borrow code from RISC0.

# zkVM

SP1 is a high-performance zkVM capable of processing certain programs up to 28 times faster than other existing zkVMs. Designed specifically for rollups, co-processors, and various ZKP applications, SP1 aims to simplify the complexity of ZKP adoption. This is achieved by presenting ZKPs in a more accessible manner through maintainable software, written in Rust or other languages that LLVM can compile.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dcd26eb2-89f1-4a2f-9257-6368ee9fdac7/806426c4-9844-4b77-a8b9-7e5ea0287328/Untitled.png)

The zkVM's performance can be attributed to several design choices that leverage recent advancements in proof systems. For example, SP1 utilizes a cross-table lookup architecture and a customizable "precompile" system. This allows for the acceleration of almost any performance bottleneck without a significant increase in recursion overhead.

A standout feature is customizability. Unlike other zkVMs, it's designed to be modified by a diverse group of contributors. This facilitates the addition of "precompiles" to the core zkVM logic, enhancing performance substantially. As such, not only is SP1's performance state-of-the-art compared to other zkVMs, but it also competes well in various use cases.

The SP1 project is ongoing, with much more development anticipated. In the spirit of transparency, the zkVM is open-sourced, and the community is encouraged to contribute. The objective is to develop a zkVM that is future-proof, akin to the Linux project, which has been maintained by a diverse and active community.

SP1 also incorporates a unique "shared challenges" method, which allows large computations to be divided into manageable shards. These shards are then interconnected seamlessly to form an inclusive global proof.

 Unlike other zkVMs that rely on closed-source constraint logic, SP1 is designed from the ground up to be modular, allowing for customization.

It can generate and verify proofs for Rust programs that have been compiled to RISC-V. SP1 supports proving of programs of arbitrary length by using a unique "shared challenges" argument that allows the prover to shard a long computation into small shards, and then generate a global proof that these shards are properly connected together.

# **Partners**

Raising **$55M in funding led** by Paradigm. Other notable investors and partners include Robot Ventures, Bankless Ventures, ZK Validator, Celestia, Wormhole, **Lido**, and **Gnosis**.

# **Use Cases**

1. **Scalability:** SP1 can be used to scale blockchain operations by providing efficient proof generation, reducing computational overhead, and enabling higher throughput for blockchain transactions.
2. **Cross-Chain Bridges:** Succinct enables the creation of trustless bridges between different blockchains, facilitating secure and verifiable cross-chain communication and asset transfers.
3. **Data Availability:** Succinct’s infrastructure supports efficient data availability proofs, ensuring the integrity and availability of data in decentralized applications and storage solutions.

# **Further Reading**

- [Introducing Succinct Network: The Protocol for Programmable Truth](https://blog.succinct.xyz/introducing-succinct-network/)
- [Introducing SP1: A performant, 100% open-source, contributor-friendly zkVM](https://blog.succinct.xyz/introducing-sp1/)
- [Succinct raises $55M led by Paradigm to make zero-knowledge proofs accessible to any developer](https://blog.succinct.xyz/series-a/)
- [Succinct Docs](https://docs.succinct.xyz/)
