---
title: What on earth is Zero Knowledge Computation [Draft!]
date: 2024-04-18 10:30:00 +0200
categories: [Zero Knowledge, Zero Knowledge Computation]
tags: [technology, zk]
mermaid: true
math: true
comments: true
---
> This article is not finished yet, but here are some of my notes while learning zk computation. If you find anything that is wrong, please reach out!

# Preface

The **privacy** aspect is a recent hot topic in the web3 ecosystem. It's evident that for a blockchain to be genuinely effective, it needs not just security, speed, adoption, and interoperability, but also privacy. Currently, most blockchains provide a *pseudonymous identity*, but this approach falls short.

*Unencrypted public blockchains cannot provide the level of data security and confidentiality needed for use-cases in these fields because anyone can see all information on them with no restrictions whatsoever.* (**Zero-Knowledge Computation: Explain It Like I’m Seven,** [MPC.Vaan](https://medium.com/@MPC.Vaan?source=post_page-----b3fca84a5837--------------------------------))


Zero-knowledge proofs are integral to privacy in blockchains as they verify transactions without revealing sensitive data. However, their binary output is limited in complex environments. This gap is addressed by Multi-Party Computation (MPC), or *ZK Computation*, which enhances privacy preservation.

To fully understand the following content, you might need prior knowledge about **modular algebra**, **polynomials**, and the **basics of cryptography.**

## Key Concepts

### Zero-Knowledge-Proof

- Basic
    
    Have you ever played find waldo? We have a problem: **find Waldo.** 
    
    ![FindWaldo](https://i.stack.imgur.com/reNlF.jpg)
    
    Let’s suppose that I want to prove (I am a **prover)** to a person (the verifier) that I know where is Waldo… but I don’t want that person to know the place Waldo is. 
    
    I go off and find a black piece of card that is at least twice the height and twice the width of the Where’s Wally puzzle. Then, I cut a Wally shaped hole right in the middle of the card.
    
    Next, I take the Where’s Wally puzzle (which is on a piece of paper) and tape it to the back of the black card so that Wally is occupying the Wally shaped hole in the center.
    
    Importantly, the person, from where they are standing in front of the black card, should not be able to see any of Wally’s surroundings in the puzzle while I am taping it up.
    
    However, once I have fixed the puzzle in place, they can be sure that they are not being deceived because there is no way that I could have displayed Wally through the hole if I didn’t know exactly where Wally was.
    
    (Clearly, there are some sneaky tricks that I could use to try and deceive the person, for example, by taping up a print-out of Wally hidden in my pocket. But let’s assume all such approaches have been accounted for by the person.)
    
    And so, when the person sees Wally through the hole, they are confident that my claim is valid (this property of the protocol is called soundness in academic literature).
    
    And I am happy too. The black card is big enough so that wherever Wally is located in the puzzle, I could tape the puzzle to the back of the black card without any of the puzzle sticking out from behind the black card.
    
    And so, this protocol satisfies my wishes: I have been able to convince the person that I know the solution (called completeness in the literature) whilst revealing no further information about Waldo’s location beyond what the person already knew (called zero knowledge-ness in the literature).
    
- Intermediate [Pending]
- Complex [Pending]
    
    

### Multi-Party Computation

- Basic
    
    Imagine you and your friends have a recipe to cook something, but you don't want anyone else to know it. Instead of telling each other the entire recipe, each of you only knows a small part of it. When you want to make the meal, each of you adds your part without revealing it to the others. 
    
    By working together like that, you can make the meal without anyone learning the whole recipe.
    
    So, in terms of computers, we would have a network where each computer has a piece of data or an operation that it keeps private. When a computation is required, each computer performs its operation on the data without revealing it to the others. The results are then combined to derive the final output. Throughout this process, no computer gains knowledge about the data or operation held by the others, ensuring privacy and confidentiality.
    
- Intermediate [Pending]
- Complex [Pending]

# Differences between Multi-Party Computation and ZK Rollups

1. **Purpose and Application**:
    - **MPC** is focused on secure computation among multiple parties without revealing private data to each other.
    - **ZK-Rollups** aims at scaling blockchain transaction throughput and efficiency, using zero-knowledge proofs to validate transactions collectively without disclosing their contents.
2. **Data Privacy and Computation**:
    - **MPC** involves complex computations distributed among participants, ensuring input data remains private throughout the computation process.
    - **ZK-Rollups** involves aggregating transactions and proving their validity in aggregate form without the need for participants to be aware of or involved in the computations of others' transactions.
3. **Blockchain Integration**:
    - **MPC** is a general cryptographic technique not inherently tied to blockchain technology but can be applied within blockchain contexts for privacy-preserving smart contracts or consensus mechanisms.
    - **ZK-Rollups** is specifically designed as a scalability solution for blockchains, enhancing performance and reducing costs by offloading transaction processing from the main chain.