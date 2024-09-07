---
title: Zero Knowledge Computation... Wait, What?
date: 2024-04-29 10:30:00 +0200
categories: [Zero Knowledge, Zero Knowledge Computation]
tags: [technology, zk]
mermaid: true
math: true
comments: true
---

> This *article* (I don't think it is a good article yet, cause it is the mix of a lot of notes) is born out of a little research I've done on Zero Knowledge Computation during last months. I hope you find it as interesting as I did! It may contain mistakes, so if you find something, feel free to do a PR on the [GitHub repository](https://github.com/luzalbaposse/luzalbaposse.github.io/tree/main/_posts). Just note that this is a work in progress, and I'll be updating it as I learn more about the topic. Enjoy! 🚀

# Overview

The privacy aspect is a recent hot topic in the web3 ecosystem. It's evident that for a blockchain to be genuinely effective, it needs not just security, speed, adoption, and interoperability, but also privacy. Currently, most blockchains provide a **pseudonymous identity**, but this approach falls short. 

> *Unencrypted public blockchains cannot provide the level of data security and confidentiality needed for use-cases in these fields because anyone can see all information on them with no restrictions whatsoever.* (Zero-Knowledge Computation: Explain It Like I’m Seven, MPC.Vaan)

So, you've heard of **Zero Knowledge Proofs**, but what about Zero Knowledge Computation? What is it, and how does it work exactly? 

## Before we dive in... Key Concepts!

<details>
<summary>Zero-Knowledge-Proof</summary>

- **Basic**

    Have you ever played find Waldo? We have a problem: **find Waldo.**

    ![Find Waldo](https://i.sstatic.net/reNlF.jpg)

    Let’s suppose that I want to prove (I'm a **prover)** to a person (the verifier) that I know where is Waldo… but I don’t want that person to know the place Waldo is.

    I go off and find a black piece of card that is at least twice the height and twice the width of the Where’s Waldo puzzle. Then, I cut a Waldo-shaped hole right in the middle of the card.

    Next, I take the puzzle (which is on a piece of paper) and tape it to the back of the black card so that Waldo is occupying the Waldo-shaped hole in the center.

    Importantly, the person, from where they are standing in front of the black card, should not be able to see any of Waldo’s surroundings in the puzzle while I am taping it up.

    However, once I have fixed the puzzle in place, they can be sure that they are not being deceived because there is no way that I could have displayed Wally through the hole if I didn’t know exactly where Wally was.

    And so, this protocol satisfies my wishes: I have been able to convince the person that I know the solution (called completeness in the literature) whilst revealing no further information about Waldo’s location beyond what the person already knew (called zero knowledge-ness in the literature).

- **Complex**

    In a more complex setting, consider the problem of proving the correctness of a computation performed by a powerful cloud server to a client with limited resources. zk-SNARKs are employed here. The server generates a succinct proof that a certain computation was performed correctly, and the client can verify this proof in a fraction of the time it would take to perform the computation itself.
    
</details>

<details>
<summary>Multi-Party Computation</summary>

- **Basic**

    Imagine you and your friends have a recipe to cook something, but you don't want anyone else to know it. Instead of telling each other the entire recipe, each of you only knows a small part of it. When you want to make the meal, each of you adds your part without revealing it to the others.

- **Intermediate**

    In an intermediate scenario, consider a group of banks that need to determine the total amount of fraudulent transactions without revealing their individual transaction data to each other. Using MPC, each bank encrypts its transaction data and shares it with the other banks. They collectively compute the total amount of fraudulent transactions.

- **Complex**

    At a complex level, think about a decentralized voting system where the integrity and privacy of each vote are paramount. In such a system, MPC can ensure that each vote is counted accurately without revealing the identity or the vote of any individual.

</details>

<details>
<summary>Differences between Multi-Party Computation and ZK Rollups</summary>

1. **Purpose and Application**:
    - **MPC** is focused on secure computation among multiple parties without revealing private data to each other.
    - **ZK-Rollups** aims at scaling blockchain transaction throughput and efficiency, using zero-knowledge proofs to validate transactions collectively without disclosing their contents.
2. **Data Privacy and Computation**:
    - **MPC** involves complex computations distributed among participants, ensuring input data remains private throughout the computation process.
    - **ZK-Rollups** involves aggregating transactions and proving their validity in aggregate form without the need for participants to be aware of or involved in the computations of others' transactions.
3. **Blockchain Integration**:
    - **MPC** is a general cryptographic technique not inherently tied to blockchain technology but can be applied within blockchain contexts for privacy-preserving smart contracts or consensus mechanisms.
    - **ZK-Rollups** is specifically designed as a scalability solution for blockchains, enhancing performance and reducing costs by offloading transaction processing from the main chain.

</details>

# Zero Knowledge Computation
So, what exactly is Zero Knowledge Computation? Basically, we are talking of a virtual machine that uses zero-knowledge proofs to ensure privacy and security. This virtual machine is called a **zkVM**. I already wrote an article about zkVMs and how they work, so if you want to learn more about them, you can check it out: [What on Earth is ZK Computation?](https://luzalbaposse.github.io/posts/WhatOnEarthZKComputation/)


# Differences between Multi-Party Computation and zkVM

zkVMs can involve multiple parties. However, only one party (the prover) generates the proof, which can then be verified by other parties. This is in contrast to MPC, where multiple parties jointly compute a function. Here are some key differences between them: 


|  | **zkVM** | **MPC** |
| --- | --- | --- |
| **Def** | Virtual machine using zero-knowledge proofs | Protocol for multiple parties to compute jointly |
| **Privacy** | Ensures privacy of input data | Ensures privacy of each party's input |
| **Verification** | Verifiable by any party | No external verifiability |
| **Trust Model** | Requires trust in the prover | Requires trust that not all parties are malicious |
| **Scalability** | High scalability with efficient proof verification | More complex, higher communication overhead |
| **Communication Overhead** | Low | High |
| **Applications** | Blockchain scalability, confidential transactions | Secure voting, privacy-preserving data analysis |
| **Key Technologies** | Zk proofs | Secure multiparty computation protocols |

> I like to clarify this cause I've had some confusion around it. zkVMs are not MPC protocols.

# The Protocols

Once I got my mind around the foundational concepts of ZK comp, I explored some protocols, each bringing their strengths to the table. All of them address key aspects of performance, security, and scalability. From the high-level language support and state-of-the-art performance of Jolt to the space efficiency of NovaNet and the developer-friendly environment of Risc Zero, each protocol is designed to meet specific needs in the field :)

| **Protocol** | **Key Features** | **Performance** | **Stage** | **Uses** | **Short Report** |
| --- | --- | --- | --- | --- | --- |
| **Risc Zero** | zkVM for RISC-V, Focus on developer accessibility | Efficient proof generation, High compatibility with existing tools | Active, open-source | General-purpose verifiable computing, Privacy-preserving applications | [Risc Zero](https://luzalbaposse.github.io/reports/RiscZero/) |
| **Jolt** | High-level language support (Rust, Go), State-of-the-art performance, Modular codebase | 2x faster than current SNARKs, 5x faster than RISC Zero | Active, open-source | Blockchain scaling, Verifiable cloud computing | [Jolt](https://luzalbaposse.github.io/reports/Jolt/) |
| **Succint** | Verifies Rust and LLVM-compiled programs, Customizable zkVM development | Up to 30x faster for certain programs | Active, open-source | Blockchain scalability, Cross-chain bridges, Data availability | [Succint](https://luzalbaposse.github.io/reports/Succint/) |
| **snarkVM** | Verifiable computing environment, Integrates well with blockchain frameworks | Advanced zk-SNARKs, Modular design with multiple components | Active, open-source | Private smart contracts, Decentralized applications, Cross-chain interoperability | [snarkVM](https://luzalbaposse.github.io/reports/snarkVM/) |
| **NovaNet** | Integrates **Lasso** for speed and **Nova** for space efficiency, WASM support, NIVC for optimization | Efficient parallel proving, Memory efficient with folding schemes | In development | Infrastructure, DePIN, zkML | [NovaNet](https://luzalbaposse.github.io/reports/NovaNet/) |
| **Nexus** | High performance, Advanced lookup arguments, **Sum-check protocol**, Research focused | Optimized for speed and efficiency | Active, open-source / V1 live | General-purpose zero-knowledge proof, High-performance computing, Privacy and security applications | [Nexus](https://luzalbaposse.github.io/reports/Nexus/) |
| **Gevolut** | Focuses on privacy and security, **Layer-1** | High performance through unikernels, Efficient proof distribution | Active, open-source | Validity rollups, Privacy rollups, zkVMs, ZK bridges, ZK mining | [Gevolut](https://luzalbaposse.github.io/reports/Gevolut/) |

# **Conclusion**

So, zkComputation is where things get interesting. It’s not just about privacy anymore—it’s about making sure computations are verifiable without anyone needing to see the details. With zkVMs and the protocols we've covered, we’re getting closer to scalable, private, and decentralized systems that don’t sacrifice security or speed.

Whether you’re working with blockchain, decentralized apps, or general verifiable computing, these technologies might change how we build stuff. The cool part? We’re just scratching the surface of what’s possible. 