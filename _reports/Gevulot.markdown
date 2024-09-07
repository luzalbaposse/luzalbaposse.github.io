---
title: Gevolut Report
date: 2024-09-07
layout: post
---

# Gevulot

# **Main Projects**

Gevulot is a fully permissionless and programmable layer 1 blockchain designed to deploy proof systems as on-chain programs. It aims to provide a decentralized proving network that matches the performance of centralized provers while offering high liveness guarantees, predictable fees, and robust performance. It is developed by a team from *Equilibrium Group*, who have previously collaborated with industry leaders like Aleo, Starknet, and Avail.

# **Key Features**

1. **High Performance:** Leverages unikernels, which are lightweight operating systems designed to run single processes efficiently. This architecture allows them to offer performance comparable to centralized prover implementations. They use a Verifiable Random Function (VRF) to distribute the proving workload, enabling efficient parallelization of proof generation across the network.

2. **Permissionless Deployment:** Allows for the deployment of prover programs in a permissionless manner. It supports multiple programming languages and compiles them into unikernel images, facilitating the deployment of existing prover implementations with minimal modifications.
   
    - **What on earth is a unikernel?**
        
        A unikernel is a lightweight operating system designed to run a single process. It packages all necessary libraries and resources within the kernel, resulting in a more compact, efficient, and secure system. Unikernels are particularly beneficial in cloud environments and for applications requiring high performance and low latency.
        
3. **High Liveness and Predictable Fees:** By distributing workloads among small groups of provers and implementing slashing mechanisms to penalize non-responsive nodes, Gevulot ensures high liveness. The fee structure is stable and predictable, allowing users to estimate and control their proving costs effectively.

# **About the “*zkVM”** (it is not a zkVM)

Gevulot operates as a programmable layer 1 blockchain where the verification of computations is done through validating zero-knowledge proofs (ZKPs) rather than re-execution. Provers can deploy programs that are run and verified by the network, with the results being added to blocks along with financial transactions. This approach distinguishes them from traditional smart contract platforms. So… **it is not *exactly* a zkVM.**

## **Technical Architecture:**

- **Prover and Verifier Programs:** Users can deploy arbitrary prover and verifier programs, written in languages such as Rust, C, C++, and more. The programs utilize multi-threading and GPU support to enhance performance.
- **Proving Workloads:** The lifecycle of proving workloads involves submitting a transaction specifying resource requirements and maximum compute time. Provers then generate proofs, which are verified by other nodes before being finalized in the blockchain.
- **Network Actors:** The network consists of validators, who order transactions and proofs into blocks, and provers, who generate and verify proofs. Validators are selected through a VRF to ensure fairness and security.
- **Execution Guarantees:** Gevulot ensures performance equivalent to centralized systems, with high liveness and availability. Provers must meet specific hardware requirements and can be removed from the network if they fail to complete assigned workloads.

# **Use Cases**

1. **Validity Rollups:** The network can verify correct execution in validity rollups by outsourcing proof generation to the network, avoiding the need for projects to bootstrap their own prover networks.
2. **Privacy Rollups:** While Gevulot itself does not support privacy-preserving proof generation, it can handle the aggregation of private proofs, beneficial for privacy rollups that need to aggregate multiple proofs into a single one.
3. **zkVMs:** Various zkVM implementations such as CairoVM, Risc0, zkWASM, and zkEVMs can be deployed on Gevulot, offering a versatile environment for verifiable computations → so Gevulot itself is not a zkVM.
4. **Bridges:** Gevulot can be utilized for ZK-bridges that rely on Proof-of-Consensus, facilitating secure and efficient cross-chain communication.
5. **ZK Mining:** Gevulot can handle tasks such as computing coinbase puzzles for Aleo or Filecoin Storage provider SNARKs, leveraging its decentralized proving infrastructure for efficient ZK mining operations.

# **Further Reading:**

- [Home | Gevulot](https://gevulot.com/)
- [Introducing Gevulot | Gevulot](https://gevulot.com/introducing)
- [The ZK Endgame](https://blog.gevulot.com/p/the-zk-endgame?triedRedirect=true) (GREAT article to read)
