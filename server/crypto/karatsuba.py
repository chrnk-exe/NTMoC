steps = []

def karatsuba(a, b):
    if len(str(a)) == 1 and len(str(b)) == 1:
        return a * b
    la, lb = len(str(a)), len(str(b))
    if la % 2 != 0 and lb % 2 != 0 and la == lb:
        if la > lb:
            la += 1
        else:
            lb += 1
        
    n = int(max(la, lb) // 2)
    A1 = a // (10 ** n)
    B1 = b // (10 ** n)
    A = karatsuba(A1, B1)
    A0 = a % (10 ** n)
    B0 = b % (10 ** n)
    B = karatsuba(A0, B0)
    tA = A0 + A1
    tB = B0 + B1
    C = karatsuba(tA, tB)
    result = (10 ** (2*n)) * A + (10 ** n) * (C - A - B) + B
    # print('non simple karatsuba: ', a, b, result)
    steps.append([a, b, n, A1, B1, A, A0, B0, B, tA, tB, C, result])
    return result
    
def karatsuba_steps(a, b):
    karatsuba(a, b)
    return steps[::-1]

for i in karatsuba_steps(395, 310):
    print(i)
# print(karatsuba_steps(4980, 816))
