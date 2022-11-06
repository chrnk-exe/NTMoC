import pandas as pd

def add_double(a, b, m, onlyResult=False):
    df = pd.DataFrame(
        index=[
            'a', 'b', 'c'
        ]
    )
    c = 0
    i = 1

    while a != 1:
        df[str(i)] = [a, b, c]
        c = (c + b * (a % 2)) % m
        b = (b * 2) % m
        a = a // 2
        i += 1

    df[str(i)] = [a, b, c]

    if onlyResult:
        return (b + c) % m
    else:
        return [df, (b + c) % m]
