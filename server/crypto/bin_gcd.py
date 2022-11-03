def bin_gcd(a, b):
    gcd = 1
    steps = ''

    while a != b:

        if (a % 2 == 0) and (b % 2 == 0):
            gcd *= 2
            a //= 2
            b //= 2
        elif (a % 2 == 0):
            a //= 2
        elif (b % 2 == 0):
            b //= 2
        elif a > b:
            a -= b
        else:
            b -= a 
        steps += "{} * D({}, {}) = ".format(gcd, a, b)
    steps += "{} * {} = ".format(gcd, a) + f"{gcd * a}"

    return steps
