---
title: What on earth is a zkVM
date: 2024-04-18 10:30:00 +0200
categories: [Zero Knowledge, Zero Knowledge Computation]
tags: [technology, zk]
mermaid: true
math: true
comments: true
---
# Litte intro
This article is based on a list of papers I've read on zk computation. Almost everything inside are notes that I gathered after reading those. So, if you find anything wrong, please don't hesitate on contact me!

# Why we need zkVMs

Zero-Knowledge Virtual Machines (zkVMs) represent a huuuuge advancement in the realm of cryptographic technologies. As digital interactions become increasingly integral to our daily lives, the need for privacy-preserving technologies has never been more critical. zkVMs are designed to execute programs in such a way that the outputs are verifiable without revealing any underlying data or the specifics of the computation itself. This capability is crucial in environments where privacy must be maintained while still ensuring the integrity and correctness of computations (such as blockchain).

The primary driver for zkVMs is the growing demand for confidentiality and data security in sensitive applications such as financial services, health care (we have a particularly huge problem here, because there are historical data leaks in the storage of medical information), and personal data management. In these sectors, businesses and individuals often need to prove the validity of their computations or the possession of certain credentials without exposing the underlying data. For instance, a financial institution could verify the solvency of a borrower without gaining access to the borrower’s detailed financial records, which could solve a lot of the bias problems we have nowadays in that sector.

Furthermore, regulatory pressures increasingly mandate the protection of consumer data, which zkVMs facilitate by minimizing data exposure during verification processes. By enabling computations on encrypted or hidden data, zkVMs could help organizations comply with privacy regulations such as GDPR in Europe or CCPA in California, which emphasize data minimization and the right to privacy.

Technologically, zkVMs are a natural evolution of zero-knowledge proofs (ZKPs), extending their principle to more complex and general computational contexts. Traditional ZKPs are limited to specific assertions, like the knowledge of a secret or the correctness of a particular statement. zkVMs generalize this to any program executed on the virtual machine, dramatically expanding the scope and utility of zero-knowledge proofs in practical applications, while also bringing that technology -zk- to simple mortals like me.

# Wait but, what is a zkVM?

Wait but, what on earth are we talking about? Well, a zkVM is a computational framework that allows the execution of programs in a way that ensures the privacy of the data and the secrecy of the computation's internal workings, while still proving the correctness of the computation's output. Essentially, a zkVM enables a party, known as the **Prover**, to convince another party, the **Verifier**, that a program has been executed correctly without revealing any other information about the program's inputs or its internal state during execution.

We know that the concept of zkVMs builds on the foundation of zkps, a technique where one party can prove to another that a given statement is true, without conveying any additional information apart from the fact that the statement is indeed true. zkVMs extend this concept to the execution of arbitrary programs, allowing for a broader application of zkps to complex computational tasks.

At its core, a zkVM consists of a virtual machine architecture that is specifically designed to be compatible with zkp constructions. This involves using cryptographic techniques to ensure that all operations within the machine leave no trace that could reveal computation details or data. The zkVM **must execute programs in a deterministic fashion**, ensuring that each execution step can be independently verified without needing to know the inputs (mind blowing, right?).

One of the primary technical challenges in designing a zkVM is the creation of a system that can efficiently convert the results of arbitrary computational processes into a form that is suitable for a zk proof. This often involves transforming program executions into mathematical problems that can be proved in zk, such as polynomial equations or other algebraic constructs that maintain the privacy of the underlying data.

Implementing a zkVM requires integrating several components, including:
- **Cryptography:** Robust encryption methods to secure data.
- **Program Transformation:** Techniques to convert standard program code into a form amenable to zero-knowledge proofs.
- **Efficient Proof Systems:** Mechanisms to generate and verify proofs must be both computationally efficient and scalable.
- **Security Protocols:** Ensuring that the entire system is resistant to various types of cyber attacks, ensuring the integrity and confidentiality of the computations.

# zkVM implies MPC?

So, when I first started to read about this, I faced the challenge of getting my mind around the idea that stands that zkvms and mpc **are not the same**. 

While zkVMs and MPC both address the need for privacy in computations, they are distinct concepts with different mechanisms and use cases. So, here we go with definitions and so on:

**Multi-Party Computation (MPC)** is a cryptographic protocol that allows multiple parties to jointly compute a function over their inputs while keeping those inputs private from each other. The essence of MPC is that no single party ever has access to all the data, yet they can collectively arrive at a correct computation outcome. This is especially useful in scenarios where multiple stakeholders, who may not fully trust each other, need to collaborate on sensitive data, such as cross-border financial transactions or joint business ventures.

While both zkVMs and MPC deal with data privacy and secure computations, they do not imply each other but rather complement each other in the broader landscape of privacy-enhancing technologies. Some key differences I found:

1. **Objective Differences:**
   - **MPC:** Aims to enable secure computation among multiple distrustful parties without a trusted third party.
   - **zkVM:** Aims to allow one party to verify the correctness of another party's computations without learning anything about the computation itself.

2. **Methodological Approach:**
   - **MPC:** Typically involves splitting data into shares distributed among participants. Computations are performed on shares, and the results are combined to obtain the final outcome without revealing individual inputs.
   - **zkVM:** Involves executing computations in a specially designed virtual environment that supports generating zero-knowledge proofs to certify the correctness of computations.

3. **Use Case Alignment:**
   - **MPC:** Best suited for scenarios where all participating parties contribute data that must remain confidential from each other.
   - **zkVM:** Ideal for scenarios where a single entity needs to prove the validity of its processes to another without revealing proprietary algorithms or sensitive data.

4. **Complexity and Performance:**
   - **MPC:** The complexity primarily depends on the number of participants and the type of function being computed, which can lead to performance challenges.
   - **zkVM:** The complexity lies in the translation of general computations into zero-knowledge proofs, which are computationally intensive but are becoming more efficient with advancements in cryptographic techniques.

So, while zkVM does not imply MPC, the technologies can be synergistic. For instance, zkVMs can be used within an MPC protocol to verify computations without revealing data to any participants, combining the strengths of both approaches to enhance privacy and security in digital interactions.

### Which is the Math Behind This?

The mathematical foundation of Zero-Knowledge Virtual Machines is deeply rooted in tthe concepts and constructions of zero-knowledge proofs. The ability to perform computations in a zk manner within a virtual machine environment requires an interplay of algebraic, cryptographic, and computational theories. Here’s an exploration of the key mathematical principles and structures that enable zkVMs to function:

1. **Polynomial Commitments and Interpolations:**
   - **Basics:** Many zkVM implementations utilize polynomial commitments as a core technique. A polynomial commitment scheme allows a prover to commit to a polynomial in such a way that they can later reveal reliable proofs about the polynomial's properties (like evaluations at specific points) without revealing the entire polynomial.
   - **Application:** In zkVMs, these commitments are used to encode the state transitions of computations within the VM, where each state or step of the computation corresponds to evaluations of these committed polynomials.

2. **Elliptic Curve Cryptography (ECC):**
   - **Basics:** ECC is employed in zkVMs for creating and verifying cryptographic proofs. ECC provides a framework for constructing various types of zero-knowledge proofs, especially those that are succinct and do not require a trusted setup, such as zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge).
   - **Application:** zkVMs use ECC to generate and verify proofs of execution, ensuring that the computations were carried out correctly without revealing any underlying data.

3. **Constraint Systems:**
   - **Basics:** Constraint systems are mathematical constructs used to represent and solve decision problems. In the context of zkVMs, a constraint system translates the operations of a program into algebraic equations that must be satisfied for the program to have been executed correctly.
   - **Application:** Each operation in the zkVM's instruction set is represented as a constraint in a system that supports zero-knowledge proofs. Verifying the correctness of a computation then becomes a matter of proving that these constraints are satisfied.

4. **Homomorphic Encryption:**
   - **Basics:** Homomorphic encryption allows computations to be carried out on ciphertexts, producing an encrypted result which, when decrypted, matches the result of operations performed on the plaintext.
   - **Application:** This property is crucial in zkVMs for maintaining privacy during computation, as it ensures that intermediate states of the computation can remain encrypted and thus hidden from the verifier.

5. **Interactive Proof Systems:**
   - **Basics:** These systems involve a prover and a verifier in a protocol where the prover must convince the verifier of the truth of a statement without revealing any other information. The Fiat-Shamir heuristic is a transformation used to convert interactive proofs into non-interactive ones by using cryptographic hash functions.
   - **Application:** In zkVMs, interactive proof systems allow for the creation of a proof that a computation was executed correctly. By making the protocol non-interactive, zkVMs can operate efficiently in a blockchain or any distributed system without the need for constant communication between the prover and verifier.

# Proving an ID in a zkVM 

This setup ensures that a user's ID is checked against a database without revealing the ID to anyone but the database itself, and even then, minimizing exposure. Breaking it down:

1. **User Interaction:**
   - **Action:** Bob starts the process by submitting Rust code designed for ID verification to the zkVM Compiler.
   - **Purpose:** This code is intended to check the validity of an ID without revealing the ID's content to any unauthorized parties.

2. **zkVM Compiler:**
   - **Action:** The zkVM Compiler takes the submitted Rust code and compiles it into a format that can be executed by the zkVM. This involves translating the high-level Rust code into low-level zkVM instructions and constraints that ensure the computation can be carried out in a zero-knowledge manner.
   - **Purpose:** Compiling the code into zkVM instructions ensures that the subsequent steps in the process can be executed without revealing any sensitive information.

3. **zkVM Execution:**
   - **Action:** The compiled program is deployed and executed on the zkVM.
   - **Purpose:** The zkVM executes the program in a zero-knowledge environment, meaning it processes the data in such a way that the operations performed cannot be seen by anyone, including the zkVM operator or external observers.

4. **Database Interaction:**
   - **Action:** The zkVM queries the Database securely, likely using a cryptographic protocol that ensures the query itself doesn’t reveal the exact nature of the data being verified.
   - **Purpose:** The Database checks the submitted ID and returns a verification result (e.g., true if the ID is valid or false if not) to the zkVM. This step is critical as it determines the outcome of the verification process but must be performed without leaking information.

5. **Proof Generation and Verification:**
   - **Action:** Upon receiving the result, the zkVM generates a proof of the ID verification. This proof is then sent to the Verifier.
   - **Purpose:** The proof enables the Verifier to confirm that the zkVM performed the ID verification correctly without needing to know the ID itself or the specifics of the database response. This maintains the confidentiality of the user's ID and the integrity of the verification process.

6. **Verifier Response:**
   - **Action:** The Verifier checks the zero-knowledge proof provided by the zkVM. Upon successful verification, the Verifier sends the verification status back to Bob.
   - **Purpose:** This final step informs Bob whether their ID has been successfully verified, completing the process. The user receives confirmation of the verification status without any party having direct access to their personal ID details throughout the process.


```mermaid
sequenceDiagram
    participant User
    participant zkVM_Compiler
    participant zkVM
    participant Database
    participant Verifier

    User->>zkVM_Compiler: Submits Rust code for ID verification
    Note over zkVM_Compiler: Compiles Rust code into zkVM instructions & constraints
    zkVM_Compiler->>zkVM: Deploys compiled program
    Note over zkVM: Executes program in zero-knowledge
    zkVM->>Database: Queries ID securely (zk proof)
    Database->>zkVM: Returns verification result
    zkVM->>Verifier: Provides zero-knowledge proof of ID verification
    Note over Verifier: Verifies proof without seeing actual ID
    Verifier->>User: Sends verification status

```

# Low degree proof example - Fibonacci Virtual Machine (From zkVM Step by Step by T. Dokchitser & A. Bulkiun )

The Fibonacci Virtual Machine (FVM) described in zkVM Step by Step provides am example of how a zkVM can execute a simple algorithm—the calculation of Fibonacci numbers—while ensuring that all computational steps are verified in zero-knowledge. 

### Overview

The FVM is designed to calculate Fibonacci numbers, which are defined by the sequence \( F(n) = F(n-1) + F(n-2) \) with initial values \( F(1) = 1 \) and \( F(2) = 1 \). The goal of our zkVM is to compute a particular Fibonacci number while proving the correctness of this computation without revealing the intermediate steps or even the index of the number being calculated.

### Math

1. **Polynomial Representation:**
   - Each value in the Fibonacci sequence can be represented as a polynomial in terms of previous values. We will use polynomial arithmetic to represent and compute each Fibonacci number. For instance, the zkVM needs to ensure that the polynomial representing \( F(n) \) actually corresponds to \( F(n-1) + F(n-2) \).

2. **Constraint Polynomials:**
   - The computation adheres to a specific constraint polynomial \( C(x) \) which ensures that the recursive definition of the Fibonacci sequence is maintained. This constraint polynomial checks that for each computed value \( F(n) \), the relation \( F(n) = F(n-1) + F(n-2) \) holds.
   - Specifically, \( C(x) \) would be constructed such that \( C(x) = 0 \) if and only if the values plugged into \( C \) satisfy the Fibonacci relation.
   

3. **Boundary Conditions:**
   - Initial or boundary conditions must be set correctly to start the sequence. In the case of Fibonacci, \( F(1) \) and \( F(2) \) are set to 1. These initial values are critical as they start the recursive computation.
   - Our zkVM must handle these conditions within its constraint system to verify that the sequence starts correctly from these values.

4. **Low-Degree Testing:**
   - The zkVM employs techniques such as the Fast Fourier Transform (FFT) for efficient polynomial evaluation and interpolation. Low-degree testing is used to verify that the polynomial constructed to represent the Fibonacci sequence does not exceed the expected degrees, which would imply errors or manipulation in the computation.

5. **Zero-Knowledge Proofs:**
   - Once the sequence is computed, the zkVM generates a zero-knowledge proof that certifies the correctness of the computed sequence up to \( F(n) \). This proof demonstrates that the computations adhere to the Fibonacci formula without revealing the actual numbers or the final result.
   - Techniques like the Fiat-Shamir heuristic can be employed to convert interactive zero-knowledge proofs into non-interactive ones, enhancing efficiency and practical usability in distributed systems such as blockchains.

### Practical Application

In the zkVM setup for FVM, the entire computation—from initial conditions through each step of the sequence computation, up to the generation of the zero-knowledge proof—is done in a manner that ensures no information about the Fibonacci numbers or their indices is leaked. This setup exemplifies how zkVMs can be used to compute and verify complex sequences and algorithms in a secure and private manner, making them applicable in various fields requiring confidential computational integrity.

# Notes on FFT

## Fast Fourier Transform (FFT) in Polynomial Evaluation

The FFT is a highly efficient algorithm for computing the Discrete Fourier Transform (DFT) and its inverse. In polynomial operations, FFT allows for fast multiplication of polynomials, which is often a foundational operation in constructing and verifying computations in a zkVM.

## Polynomial Representation

In our zkVM, suppose each Fibonacci number $F(n)$ is represented as a coefficient of a polynomial $P(x)$, such that evaluating $P$ at a certain set of points (usually roots of unity) provides the sequence of Fibonacci numbers. The polynomial $P(x)$ can be expressed as:

$$
P(x) = a_0 + a_1x + a_2x^2 + \ldots + a_nx^n
$$

where $a_i$ are coefficients derived from the Fibonacci sequence.

## Using FFT for Polynomial Evaluation

FFT allows us to evaluate $P(x)$ at $n$ points efficiently, especially useful when these points are the $n$-th roots of unity $\omega_n^k$ (where $\omega_n = e^{(2\pi i/n)}$ and $k$ varies over $0, 1, 2, \ldots, n-1$). The values $P(\omega_n^k)$ can be computed in $O(n \log n)$ time using FFT.

## Application to Fibonacci Sequence

To apply this in the zkVM for the Fibonacci sequence, the FFT helps quickly compute the values of $P(x)$ at multiple points, which can be used to verify if the sequence follows the Fibonacci relation through these evaluations without needing to compute each term explicitly.

## Low-Degree Testing

Low-degree testing is used to ensure that the polynomial $P(x)$ constructed to represent the Fibonacci sequence does not exceed the expected degree. This is crucial to prevent errors or manipulative computations that could falsely satisfy the zkVM's verification checks.

## Theoretical Background

The degree of the polynomial $P(x)$ representing the Fibonacci sequence should ideally not be more than $n$ if $F(n)$ is the highest term we are interested in verifying. Any higher degree could indicate an error in formulation or an attempt to manipulate the computation.

## Implementation of Low-Degree Testing

One common approach for low-degree testing in zkVMs is to use the Scholz-Zippel lemma, which provides a probabilistic method of testing if a polynomial is of a certain degree. The test involves evaluating the polynomial at a random point and checking if the evaluation agrees with the expected value derived from other means (like FFT outputs). If the polynomial passes this test for several random points, it is highly likely to be of the correct degree.

# Bibliography
T. Dokchitser & A. Bulkiun, Zero Knowledge Virtual Machine Step by Step
H. M. Ardevol, J. B. Mel ́e, D. Lubarov, J. L. Mun ̃oz-Tapia, RapidUp: Multi-Domain Permutation Protocol for Lookup Tables, Cryptology ePrint Archive, Report 2022/1050, 2022, https://eprint.iacr.org/2022/1050.
E. Ben-Sasson, A. Chiesa, E. Tromer, M. Virza, Succinct non-interactive arguments for a von neu- mann architecture, Cryptology ePrint Archive, Report 2013/879, 2013, https://eprint.iacr.org/2013/879. [BS+18] E. Ben-Sasson, I. Bentov, Y. Horesh, M. Riabzev, Fast reed-solomon interactive oracle proofs of proximity, in: 45th international colloquium on automata, languages, and programming (icalp 2018),
Schloss Dagstuhl-Leibniz-Zentrum fu ̈r Informatik, 2018.
E. Ben-Sasson, L. Goldberg, S. Kopparty, S. Saraf, DEEP-FRI: Sampling outside the box improves
soundness, preprint, 2019, arXiv: 1903.12243.
J. Bootle, A. Cerulli, J. Groth, S. Jakobsen, M. Maller, Arya: Nearly Linear-Time Zero-
Knowledge Proofs for Correct Program Execution, Cryptology ePrint Archive, Report 2018/380, 2018,
https://eprint.iacr.org/2018/380.
