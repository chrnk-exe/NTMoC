import math

import pandas as pd
from .addition_doubling import add_double


def fast_pow(a, b, m, print_help=False, onlyResult=False):
    if print_help:
        help_tables = []
        print(f"Воспользуемся алгоритмом быстрого возведения в степень {b}^{a} (mod {m})")
        df = pd.DataFrame(
            index=[
                'a', 'b', 'c'
            ]
        )

    c, i = 1, 1

    while a != 1:
        if print_help:
            df[str(i)] = [a, b, c]

        cc = add_double(c, b ** (a % 2), m, onlyResult=onlyResult)
        c = cc % m
        bb = add_double(b, b, m, onlyResult=onlyResult)
        b = bb % m
        a = a // 2
        i += 1

        if print_help:
            print(cc[0])
            help_tables.append(cc[0])
            print(bb[0])
            help_tables.append(bb[0])

    if print_help:
        df[str(i)] = [a, b, c]
        print(df)
        print("Result: {}".format((b * c) % m))

        r = [df, (b * c) % m, help_tables]
        for i in r[2]:
            print(i, end="\n--------------------\n")
        print(r[0])
        print(f'Result: {r[1]}')
    return (b * c) % m
