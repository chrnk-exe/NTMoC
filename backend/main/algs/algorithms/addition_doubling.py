import pandas as pd


def add_double(a, b, m, print_help=False, onlyResult=False):
    if print_help:
        df = pd.DataFrame(
            index=[
                'a', 'b', 'c'
            ]
        )

    c, i = 0, 1

    while a != 1:
        if print_help:
            df[str(i)] = [a, b, c]

        c = (c + b * (a % 2)) % m
        b = (b * 2) % m
        a = a // 2
        i += 1

    if print_help:
        df[str(i)] = [a, b, c]

        for stroka in [df, (b + c) % m]:
            print(stroka)

    if onlyResult:
        return (b + c) % m
    else:
        return [df, (b + c) % m]
