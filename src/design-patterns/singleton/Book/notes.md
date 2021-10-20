# Singleton

The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.

|              |            |
| ------------ | :--------: |
| Pattern Type | Creational |
|              |            |

Pros:

- Preferable to a global variable as you can make use of lazy loading

Cons:

- Singleton violates the loose coupling principle
- Singleton also violates the Single Responsibility Principle (SRP):
  - The class is responsible for managing its once instance
  - It is also responsible for any business logic you wanted out of it - e.g., to use the singleton as a logger
