def get_decimal(cc, m):
    number = 0
    while True:
        if all(number % m[i] == cc[i] for i in range(len(m))):
            return number
        number += 1


def get_pol_code(cc, m):
    # cc = [2, 3, 3]
    # m = [3, 5, 7]

    if len(cc) != len(m):
        exit('diff cc and m len')

    ans = list()

    while len(cc) > 0:
        cc_count = cc.pop(0)
        m_count = m.pop(0)
        ans.append(cc_count)

        cc_subs = [c - cc_count for c in cc]
        m_inverse = [get_inverse(m_count, x) for x in m]
        cc = [cc_subs[i] * m_inverse[i] for i in range(len(cc_subs))]
        cc = normalize(cc, m)

    return ans


def normalize(cc, m):
    if len(cc) != len(m):
        raise ValueError('cc len != m')
    for i in range(len(cc)):
        while cc[i] < 0:
            cc[i] += m[i]

        while cc[i] >= m[i]:
            cc[i] -= m[i]

    return cc


def get_inverse(b, m):
    count = 1
    while b * count % m != 1:
        count += 1

    return count


def divide_with_remainder(cc1, cc2, m):
    inv_2 = [2, 3, 4]
    m_slice = m[1:]
    a_list = [cc1]

    while cc1 != [1, 1, 1, 1]:
        if cc1[0] == 1:
            cc1 = normalize([cc1[i] - 1 for i in range(len(cc1))], m)

        cc1_a = cc1.copy()[1:]
        cc1_a = normalize([cc1_a[i] * inv_2[i] for i in range(len(cc1_a))], m_slice)

        pol_code = get_pol_code(cc1_a.copy(), m_slice.copy())
        remainder = (pol_code[0] + 3 * (pol_code[1] + 5 * pol_code[2])) % 2

        cc1 = [remainder] + cc1_a

        a_list.append(cc1)

    one = [1, 1, 1, 1]
    b_list = []

    for i in range(len(a_list)):
        b_list.append(one)
        one = normalize([one[i] * 2 for i in range(len(one))], m)
        if get_decimal(one, m) > get_decimal(cc2, m):
            one = normalize([one[i] - cc2[i] for i in range(len(one))], m)

    print(a_list)
    print(b_list)
    ans = [0, 0, 0, 0]
    c_list = []

    for j in range(len(a_list)):
        c_list.append(ans)
        if a_list[j][0] > 0:
            ans = normalize([ans[i] + b_list[j][i] for i in range(len(ans))], m)
            if get_decimal(ans, m) > get_decimal(cc2, m):
                ans = normalize([ans[i] - cc2[i] for i in range(len(ans))], m)

    print(c_list)
    print(ans, '!')


if __name__ == '__main__':
    # divide_with_remainder([0, 1, 2, 5], [1, 0, 2, 6], [2, 3, 5, 7])
    divide_with_remainder([1, 2, 3, 6], [1, 1, 0, 4], [2, 3, 5, 7])

