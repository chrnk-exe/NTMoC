from algorithms.addition_doubling import add_double
from algorithms.fast_pow import fast_pow
import pandas as pd
import numpy as np

def is_mutsimple(a, b):
    return True if np.gcd(a, b) == 1 else False

def get_inverse_slow(b, m):
	count = 1
	while b*count % m != 1:
		count += 1 
	return count

def factorization(n):
    result = []
    prime = 2
    while prime < n:
        if n % prime == 0:
            n /= prime
            result.append(prime)
            continue
        prime += 1
        
    result.append(prime)
    result = list(set(map(lambda x: x ** result.count(x), result)))
    return result


def solve(a, b, m):
    # print()
    # amgcd = np.gcd(a, m)
    # if amgcd != 1 and b % amgcd == 0:
    #     a = a // amgcd
    #     b = b // amgcd
    #     m = m // amgcd
    m1, m2 = factorization(m)
    if not is_mutsimple(m1, m2):
        return [f'Unable to fact({m})']
    solution = [
        f"{a}x={b}(mod {m1})",
        f"{a}x={b}(mod {m2})"
    ]
    a1 = add_double(a, 1, m1, True)
    a2 = add_double(a, 1, m2, True)
    b1 = add_double(b, 1, m1, True)
    b2 = add_double(b, 1, m2, True)
    a1inv = get_inverse_slow(a1, m1)
    a2inv = get_inverse_slow(a2, m2)
    solution.append(f"{a1}x={b1}(mod {m1}) | * {a1inv}")
    solution.append(f"{a2}x={b2}(mod {m2}) | * {a2inv}")
    a1 = (a1 * a1inv) % m1
    b1 = (b1 * a1inv) % m1
    a2 = (a2 * a2inv) % m2
    b2 = (b2 * a2inv) % m2
    solution.append(f"{a1}x={b1}(mod {m1})") 
    solution.append(f"{a2}x={b2}(mod {m2})")
    solution.append(f"x={b1}(mod {m1})")
    solution.append(f"x={b2} + {m2}k, k - целое")
    solution.append(f"{b2} + {m2}k={b1}(mod {m1})")
    b1 -= b2
    if b1 < 0:
        b1 += m1
    m2inv = get_inverse_slow(m2, m1)
    solution.append(f"{m2}k={b1}(mod {m1}) | * {m2inv}")
    b1 = (b1 * m2inv) % m1
    # m2 = (m2 * m2inv) % m1
    solution.append(f"k={b1}(mod {m1})")
    solution.append(f"k={b1} + {m1}t, t - целое")
    solution.append(f"x={b2} + {m2}({b1} + {m1}t), t - целое")
    solution.append(f"x={m2*b1 + b2} + {m2*m1}t, t - целое")  
    return solution
    
for i in solve(24, 52, 116):
    print(i)

    
