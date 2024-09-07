---
title: Nexus Report
date: 2024-09-07
layout: post
---

# Nexus
# TD;LR

> Fundamentally, the Nexus project seeks to bring the concrete cost of verifiable computation down by orders of magnitude through a variety of scientific, engineering, and economic techniques, so that it may finally become a practical form of computation.

Nexus is building a **distributed** zkVM, designed to prove *a trillion CPU cycles per second*.

- The architecture consists of two parts: Nexus Zero and Nexus.
    - **Nexus Zero**: A decentralized verifiable cloud computing network supported by zero-knowledge proofs and a universal zkVM.
    - **Nexus**: A decentralized verifiable cloud computing network powered by multi-party computation, state machine replication, and a universal WASM virtual machine.
- Applications for both Nexus and Nexus Zero can be written in traditional programming languages, currently supporting Rust.
- Nexus applications operate within a decentralized cloud computing network and are directly linked to Ethereum.
- Unlike Nexus applications, Nexus Zero applications inherit Ethereum's security.
- The platform is expected to serve as a source of validity, decentralization, and fault tolerance for proof-generating applications.

## Main Projects

- **zkVM**: A system that combines the NVM computational model with a prover to produce the same output while generating a succinct proof of correct computation in zero knowledge.
- **NVM**: A simple, auditable, and highly modular Universal Turing Machine that can be extended with custom instructions called zkVM [co-processors](https://www.notion.so/Nexus-c4b8a6305de54c3e8f9ab43d370108ed?pvs=21) for accelerated instructions without affecting prover performance.
- **Nexus Network**: The Nexus Network is a distributed prover network that aggregates computing power to perform massively parallelized proving of unbounded computations, enabling the zkVM to operate at a scale proportional to the collective computing power of the network.

## Key Features

- NVM can be extended with custom instructions, known as [zkVM co-processors](https://x.com/oxlumi/status/1832013398575313192), which are user-defined instructions that extend the NVM instruction set without affecting the per-cycle prover performance.
- Implements the NVM computational model with zkVM co-processors for efficient computation.
- Leverages the Nexus Network for distributed, **parallelized** proving of complex computations.

Their development state is **advanced**.

# zkVM

So, let's dive into it. As said before, the Nexus zkVM is a machine that is capable of proving any computation, with a primary focus on very large computations through extreme parallelization. This machine leverages innovative techniques such as Incrementally Verifiable Computation (IVC) and high-speed proof accumulation, embodying the concept of Proof-Carrying Data (PCD).

The execution process of Nexus zkVM is broken down into several stages. It starts with a one-time setup where you can specify a custom machine architecture and generate public parameters for the system. This step only needs to be performed once for a specific machine architecture.

Following this, for every program coded for the machine, the following steps are executed:

- **Compilation**: The program is compiled to the instruction set of the Nexus Virtual Machine (NVM). The NVM will execute the program on the machine.
- **Execution**: The program is run on the NVM, generating a complete execution trace.
- **Folding**: IVC proofs for blocks of execution are produced and accumulated in a massively parallelized manner. This step is the core of the proving process and is computationally intensive, but highly parallelizable.
- **Compression**: The accumulated proof is compressed with a sequence of zk-SNARKs, reducing its size for efficient storage and verification.

The system is highly parallelizable and can be executed by a distributed network of provers, making it efficient and powerful for proving any computation, no matter how large it may be.

# NVM

The Nexus Virtual Machine is a minimal and extensible Instruction Set Architecture and RAM that enables universal computation. The architecture of the NVM is based on the von Neumann architecture, known for its simplicity and efficiency.

- **What is a von Neumann architecture?**
    - TD;LR The von Neumann architecture is a computer design model where the data and instructions are stored in the same memory.

It also features a simple memory model with a 32-bit address space, a single stack and heap, and memory proved incrementally with Merkle Trees and Poseidon hashes.

- **What is a Merkle Tree?**
    - TD;LR A Merkle Tree is a data structure used to verify large amounts of data efficiently, with each parent node being a hash of its children.

The NVM can be extended with custom instructions (zkVM co-processors), which enhance the NVM's instruction set without affecting prover performance.

# ZK Coprocessors

Coprocessors are designed to enhance computational efficiency by allowing ASIC-like performance for specific instructions without requiring constant computational expenditure.

- **What is “ASIC-like”?**
    - ASIC-like refers to processors that are custom-designed for specific computational tasks, making them far more efficient than general-purpose processors.

Coprocessors can accelerate operations like custom cryptographic primitives and high-level tasks such as matrix multiplications and square roots.

# Nexus Network

The Nexus Network aggregates the computing power of various devices, including CPUs and GPUs, to perform parallelized computation.

- **Aim**: To significantly increase the throughput of the Nexus zkVM, scaling proof generation to a massive level proportional to the collective computing power of the network.

The Nexus Network can be thought of as a distributed supercomputer capable of verifiable computation.

- **What is a Proof-Carrying Data System (PCD)?**
    - PCD allows distributed computation of proofs in a Directed Acyclic Graph (DAG), enabling verifiable computations among mutually distrustful parties.

The network's inclusivity allows smaller devices like smartphones and laptops to participate, although more powerful devices like clusters of GPUs or ASICs will contribute the bulk of the computational power.

# Parallelized Computation

Nexus Network enables parallelized computation by aggregating CPU/GPU power from multiple nodes.

- Each node processes a portion of the workload simultaneously, increasing overall efficiency.
- By distributing workloads incrementally across nodes, the network scales its throughput according to the combined power of the network.

# Partners

They have received investment from:

- Dragonfly
- Alliance
- SVA

They don't provide much information about their partners on their website or Twitter. 

# Some Comments

→ The team is **highly academic**, with a scientific focus, unlike other protocols (e.g., Risc Zero does not have a CSO).

# Further Reading

- [Nexus: Enabling General Purpose Verifiable Cloud Computing](https://www.coinlive.com/news/Nexus-Enabling-General-Purpose-Verifiable-Cloud-Computing)
- [Notes on Call w/Daniel Marin](https://www.notion.so/Notes-on-Call-w-Daniel-Marin-21757f9b3f8c4a6bba26a76d0037010a?pvs=21)
