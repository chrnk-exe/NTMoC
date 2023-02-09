
def get_inverse(b, m):
    count = 1
    while b * count % m != 1:
        count += 1

    return count


def norm(a, m):
    while a - m >= 0:
        a -= m

    while a < 0:
        a += m

    return a


def double_point(x, y, a, m):
    print('=== double start ===')

    alfa = (3 * norm(x ** 2, m) + a) * get_inverse(2 * y, m)
    alfa = norm(alfa, m)
    print(f'alfa: {alfa}')

    c = y - (alfa * x)
    c = norm(c, m)

    print(f'c: {c}')

    x_new = alfa ** 2 - 2 * x
    x_new = norm(x_new, m)
    print(f'x_new: {x_new}')

    y_new = -(alfa * x_new + c)
    y_new = norm(y_new, m)
    print(f'y_new: {y_new}')

    return [x_new, y_new]


def sum_points(x_p, y_p, x_q, y_q, m):
    print('=== sum start ===')

    alfa = (y_p - y_q) * get_inverse(x_p - x_q, m)
    alfa = norm(alfa, m)
    print(f'alfa: {alfa}')

    c = y_p - alfa * x_p
    c = norm(c, m)
    print(f'c: {c}')

    x_new = alfa ** 2 - x_p - x_q
    x_new = norm(x_new, m)
    print(f'x_new: {x_new}')

    y_new = -(alfa * x_new + c)
    y_new = norm(y_new, m)
    print(f'y_new: {y_new}')

    return [norm(x_new, m), norm(y_new, m)]


def multiply_point_by_three(x, y, a, m):
    x_doubled, y_doubled = double_point(x, y, a, m)
    x_res, y_res = sum_points(x, y, x_doubled, y_doubled, m)


# x, y, a, m
# multiply_point_by_three(17, 7, 9, 23)
