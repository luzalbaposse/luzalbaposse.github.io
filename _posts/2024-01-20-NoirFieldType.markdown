---
title: How to get your brain to understand Field type on Noir
date: 2024-01-20 10:30:00 +0200
categories: [Zero Knowledge, Noir]
tags: [technology, zk, noir]
mermaid: true
math: true
comments: true
---
> This are my notes from when I was trying to understand this, if you find something wrong, reach out!

**TD;LR**

```mermaid
graph TD
    A[Noir: A Language for SNARK Proving Systems]
    
    A -->|Defines| B[Field Type]
    B -->|Represents| C[Native Field Type of Proving Backend]
    
    C --> D[Finite Field]
    C --> E[Elliptic Curve]
    C --> F[Proving System Backends]

    D -->|Cardinality p or p^n| G[Arithmetic Operations]
    E -->|Defined by Equation| H[Addition Operation for Points]
    F -->|Different Types| I[PLONK, HONK, UltraPLONK]
    
    I -->|Elliptic Curve Dependency| J[Varies by Backend]
    
    A -->|Compiles to| K[Abstract Circuit Intermediate Representation]
    K -->|Compatible With| L[Various Back-end Proving Systems]
    
    L --> M[Marlin]
    L --> N[PLONK]
    L --> O[Groth16]
    
    A -->|Field Methods Include| P[to_le_bits / to_be_bits]
    P --> Q[Little Endian / Big Endian Representation]
    P -->|Also| R[to_le_radix / to_be_radix]
    P -->|And| S[pow_32 and sgn0]

```

So, first of all, what is Noir? Basically, a language that allows you to write SNARK proving systems -- it is a Domain Specific Language.

One of the things I struggled to understand is the concept of the field type, so I thought of sharing my notes on this in case someone else needs to get it into their brains. Basically, it corresponds to the native field type of the proving backend, and the size of a Noir field depends on the finite field of the elliptic curve for the adopted proving backend (as stated in the Noir Docs).

But, translating that to mortals like me, what does it means?
## Finite Field
A finite field, also known as a "Galois field," is a mathematical system composed of a finite number of elements, where arithmetic operations like addition, subtraction, multiplication, and division can be performed. Each finite field has a cardinality, which is a prime power (like p or p^n, where p is a prime number and n is a positive integer).

## Elliptic Curve
An elliptic curve, in this context, is a type of curve defined by an algebraic equation of the form y^2 = x^3 + ax + b, where a and b are coefficients that meet certain conditions to ensure that the curve does not have singularities (points where the curve crosses itself or has a cusp). These curves have a super cool thing: if you take two points on the curve and draw a straight line through them, that line will generally intersect the curve at exactly one additional point... And thats cool because... ? It allows for the definition of an "addition" operation for points on the curve. If you take two points, the line through them intersects the curve at a third point, and reflecting this point along the x-axis gives you the 'sum' of the first two points. In cryptography, the difficulty of reversing this addition operation (known as the "Elliptic Curve Discrete Logarithm Problem") is what makes elliptic curves so amazing. This problem is believed to be significantly harder to solve than the discrete logarithm problem on which traditional public key cryptography is based, especially for equivalently sized keys.

## Finite Field of an Elliptic Curve
When we say finite field of an elliptic curve, we are referring to an elliptic curve whose points have coordinates (x, y) that are elements of a finite field (obvious, right?). This means that all arithmetic operations on the curve (like adding points on it) are performed within the confines of this finite field.

The choice of the finite field affects the properties and structure of the elliptic curve. For example, a curve over a finite field of size p (a prime number) will behave differently than one over a finite field of size 2^n (a power of two).

## Now, what?
Having understood that, it's easier to say that fields support integer arithmetic, and they are generally used as a number in Noir. The point of all this is that you can have various proving system backends: PLONK, HONK, UltraPLONK... There are different proving backend engines, which can operate over different curves. You can use different elliptic curves in different contexts, because they have different properties. Therefore, the native type (Field) we use in Noir will have a different size depending on the proving backends.

So, Noir boasts a feature of being proving system agnostic. Instead of directly compiling to circuits, it utilizes an intermediary representation, something like LLVM. This design choice grants compatibility with various back-end proving systems like Marlin, PLONK, Groth16... The intermediate representation employed is referred to as an Abstract Circuit Intermediate Representation. While Aztec Network incorporates a proving system back-end known as Barretenberg, specifically designed to operate on Plonk, Noir offers flexibility. So, devs have the freedom to seamlessly integrate any SNARK-based proving system that aligns with their specific requirements.

## The methods
Now, we have common methods on Fields that are:

to_le_bits: in will transform field into ana array of bits, Little Endian.
Reminder from those computer architecture classes: in a little endian system, the least significant bytes are stored first, followed by the more significant bytes. This means that the least significant byte of the number is found at the lowest memory address.

to_be_bits: in will transform field into ana array of bits, Big Endian.
So... if little endian is the thing I explained before, big endian will be the opposite of the little one. Now, the most significant byte of a word is stored at the smallest memory address and the least significant byte at the highest.

If we use bytes instead of bits, then they will be transform into an array of bytes (for our surprise!). Then we have to_le_radix and to_be_radix, and in this case, they will be decomposed into a vector over the specified base. Lastly, if we use pow_32, it returns the value to the power of the specified exponent and sgn0 is used to determine the parity of a field element (i think).