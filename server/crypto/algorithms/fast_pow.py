import pandas as pd
from algorithms.addition_doubling import add_double

def fast_pow(a, b, m):
    # print(f"Воспользуемся алгоритмом быстрого возведения в степень {b}^{a} (mod {m})")
    df = pd.DataFrame(
        index=[
            'a', 'b', 'c'
        ]
    )

    c = 1
    i = 1
    
    helpTables = []

    while a != 1:
        df[str(i)] = [a, b, c]

        cc = add_double(c, b ** (a % 2), m)
        # print(cc[0])
        helpTables.append(cc[0])
        c = (cc[1]) % m
        bb = add_double(b, b, m)
        # print(bb[0])
        helpTables.append(bb[0])      
        b = (bb[1]) % m
        a = a // 2
        i += 1

    df[str(i)] = [a, b, c]
    # print(df)
    # print("Result: {}".format((b * c) % m))
    
    return [df, (b * c) % m, helpTables]

# r = fast_pow(18, 9, 41, 1)
# for i in r[2]:
#     print(i, end="\n--------------------\n")
# print(r[0])
# print(f'Result: {r[1]}')