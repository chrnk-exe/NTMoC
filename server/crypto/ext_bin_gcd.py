import numpy as np

def with_odd_num(arr):
    for i in arr:
        if i % 2 != 0:
            return True
    return False

def ext_bin_gcd(a, b, output=False):
    k = 1
    steps = []
    while (a % 2 == 0) and (b % 2 == 0):
        k *= 2
        a //= 2
        b //= 2
        steps.append(f'D({a*2},{b*2}) = 2*D({a},{b})')
    
    if a > b:
        a, b = b, a
        
    am = np.array([a, 1, 0])
    bm = np.array([b, 0, 1])
    helpa = np.array([0, -b, a])
    helpb = np.array([0, b, -a])

    while am[0] != bm[0]:

        if am[0] % 2 == 0:
            if with_odd_num(am):
                am += helpa
            am //= 2
            steps.append(np.array([am, bm, helpa, helpb]))
            continue
        if bm[0] % 2 ==0:
            if with_odd_num(bm):
                bm += helpb
            bm //= 2
            steps.append(np.array([am, bm, helpa, helpb]))
            continue
        if bm[0] > am[0]:
            bm -= am
        else:
            am -= bm
        steps.append(np.array([am, bm, helpa, helpb]))
        
    
    if output: 
        print(f'{k*am[0]} = {a*k} * {am[1]} + {b*k} * {am[2]}')
        print(f'{k*bm[0]} = {a*k} * {bm[1]} + {b*k} * {bm[2]}')
        
    steps.append(f'{k*am[0]} = {a*k} * {am[1]} + {b*k} * {am[2]}')
    steps.append(f'{k*bm[0]} = {a*k} * {bm[1]} + {b*k} * {bm[2]}')
    
    return steps
