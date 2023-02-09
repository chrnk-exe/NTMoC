import math
import pandas as pd


def add_double(a, b, m, print_help=False):
    if print_help:
        df = pd.DataFrame(
            index=[
                'a', 'b', 'c'
            ]
        )

    c, i = 0, 1

    while a != 1:
        print([a, b, c])
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

    if print_help:
        return [df, (b + c) % m]
    else:
        return (b + c) % m


def fast_pow(a, b, m, print_help=False):
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

        cc = add_double(c, b ** (a % 2), m, print_help=print_help)
        c = cc % m
        bb = add_double(b, b, m, print_help=print_help)
        b = bb % m
        a = a // 2
        i += 1

        if print_help:
            print(cc[0])
            help_tables.append(cc[0])
            print(bb[0])
            help_tables.append(bb[0])

    print([a, b, c])
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


def decompose_to_primes(number):
    response = {}
    divider = 2

    while number > 1:
        while number % divider == 0:
            number //= divider
            response[divider] = response.get(divider, 0) + 1
        divider += 1
    return response


def is_smooth(number, r):
    return all(i <= r for i in decompose_to_primes(number).keys())


def search_a_smooth_square_for_module(module, r):
    for i in range(1, 2000):
        number = fast_pow(2, i, module)

        if is_smooth(number, r):
            ans = math.sqrt(number)
            if ans % 1 == 0:
                ans = int(ans)
                if ans != i:
                    gcd = math.gcd(module, i - ans)
                    print(f'{i} != {ans}', '|', f'{gcd} * {module/gcd}')
                    # return

# module, r
# search_a_smooth_square_for_module(3127, 5)

# print(fast_pow(7, 7, 29))
print(add_double(20, 7, 29))
