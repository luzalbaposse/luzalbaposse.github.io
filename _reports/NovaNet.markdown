---
title: NovaNet Report
date: 2024-09-07
categories: [Reports]
tags: [blockchain]
layout: post
---

# NovaNet
> Report under construction, please be patient : )

# **Main Projects**

NovaNet is a p2p, *decentralized* proving network developed by ***ICME***. It leverages a zkVM that integrates **Lasso** for speed and **Nova** for space efficiency. This zkVM is designed to work efficiently on various devices, including browsers and other constrained environments, supporting applications such as zero-knowledge machine learning (zkML), Web3 infrastructure, and Web2 applications.

# **Key Features**

1. **Integration of Lasso and Nova:** NovaNet combines the speed benefits of Lasso with the space efficiency of Nova, allowing it to handle a wide range of use cases with optimal performance.
2. **WASM Support:** The network is based on WebAssembly (WASM), which is widely adopted and portable, enabling zero-knowledge proofs to be executed efficiently even in web browsers.
3. **Non-Uniform Incremental Verifiable Computation (NIVC):** it employs NIVC, which allows it to adapt zkCircuits based on the prover's memory specifications, optimizing both speed and privacy for different use cases.

# **About the zkVM**

NovaNet's zkVM supports advanced cryptographic techniques such as the sum-check protocol, multi-scalar multiplications (MSM), and multivariate polynomial commitment schemes. This flexibility allows NovaNet to perform efficiently across different environments and handle complex computations like floating-point numbers and bitwise operations.

## **Technical Architecture**

- **Modular Design:** The network’s architecture is modular, enabling the integration of various zkVMs and proving schemes. This design allows NovaNet to optimize for both general-purpose and specialized applications.
- **Parallelization:** NovaNet supports parallel proving, enabling large proofs to be broken down into smaller, manageable tasks that can be processed simultaneously, significantly improving speed and efficiency.
- **Incentive Structure:** The network incentivizes participation through a decentralized system that rewards provers based on their contributions. This system encourages cooperation rather than competition, promoting efficiency and scalability.

## Lasso

Lasso is a ZKP system designed for speed and efficiency in generating and verifying proofs. It uses a new paradigm developed by Justin Thaler, which focuses on reducing the overhead associated with zkVMs. Lasso leverages **advanced lookup arguments** and the **sum-check protocol** to handle complex computations like floating-point numbers and bitwise operations efficiently. This makes it particularly suitable for applications requiring high-speed proof generation and verification. By utilizing these techniques, Lasso can significantly improve the performance of zero-knowledge computations, making it faster and more scalable ([ICME](https://blog.icme.io/introducing-novanet/)).

- What on earth is a sum-check (or checksum?) protocol
    
    Cryptographic method used in zero-knowledge proofs. It allows for the efficient verification of the sum of a large number of values without needing to know the actual values. This helps maintain privacy while ensuring the correctness of computations.
    

## Nova

Nova is another ZKP system that emphasizes space efficiency through incremental verifiable computation (IVC). Nova allows for the folding of computations, which means it can break down large computations into smaller, verifiable steps that require less memory. This approach makes Nova highly efficient in terms of space, as it minimizes the amount of memory needed to store and verify proofs. It capabilities enable it to handle large-scale computations in a memory-efficient manner, making it ideal for applications where memory resources are constrained. The combination of Nova's space efficiency and Lasso's speed provides a robust framework for zero-knowledge proofs in various environments, from constrained devices to high-performance computing setups

- What on earth is incremental verifiable computation
    
    Is a method used in computing where a large computation is broken down into smaller, verifiable steps that can be computed and checked separately. This allows for the verification of the correctness of a computation without having to repeat the entire computation or know all the details. It's particularly useful in situations where resources such as memory or processing power are limited.
    

## **Partners**

NovaNet is developed by ICME, with contributions to open-source projects such as SuperNova. The collaborative efforts aim to enhance the zkVM ecosystem and foster innovation in zero-knowledge proof technologies.

## **Use Cases**

1. **Infrastructure:** it enhances the privacy, security, and performance of modular blockchains and applications such as real-world assets, DeFi exchanges, and cross-chain messaging protocols.
2. **Decentralized Private Infrastructure Networks (DePIN):** it enables DePINs to run proofs directly on infrastructure devices, maintaining privacy and decentralization without relying on middleware providers.
3. **Verifiable AI:** it supports AI applications by generating proofs that verify AI models' properties and compliance, ensuring data privacy and security throughout the AI lifecycle.

# **Further Reading**

- [Introducing NovaNet](https://blog.icme.io/introducing-novanet/)
- [NovaNet Official Website](https://www.novanet.xyz/)