import numpy as np


class ExtBinGcd:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def solve(self):
        return self.ext_bin_gcd()

    @staticmethod
    def with_odd_num(arr):
        for i in arr:
            if i % 2 != 0:
                return True
        return False

    @staticmethod
    def toStr(arr):
        return np.array2string(arr, precision=2, separator=',', suppress_small=True)

    def ext_bin_gcd(self):
        k = 1
        steps = list()

        while (self.a % 2 == 0) and (self.b % 2 == 0):
            k *= 2
            self.a //= 2
            self.b //= 2

        if k > 1:
            steps.append({
                'label': f'Вынесем общий делитель, равный степени двойки => {k}',
                'type': 'string',
                'data': f'D({self.a * 2},{self.b * 2}) = 2*D({self.a},{self.b})'
            })

        if self.a > self.b:
            self.a, self.b = self.b, self.a

        am = np.array([self.a, 1, 0])
        bm = np.array([self.b, 0, 1])
        help_a = np.array([0, -self.b, self.a])
        help_b = np.array([0, self.b, -self.a])

        steps.append({
            'label': f'Исходная матрица',
            'type': 'matrix',
            'data': np.array([am, bm, help_a, help_b])
        })

        while am[0] != bm[0]:
            if am[0] % 2 == 0:
                if self.with_odd_num(am):
                    steps.append({
                        'label': f'Строка {self.toStr(am)} содержит нечетные элементы, сложим со строкой {self.toStr(help_a)}',
                        'type': 'matrix',
                        'data': np.array([am + help_a, bm, help_a, help_b])
                    })
                    am += help_a

                steps.append({
                    'label': f'Строка {self.toStr(am)} четна, делим на 2',
                    'type': 'matrix',
                    'data': np.array([am // 2, bm, help_a, help_b])
                })
                am //= 2
                continue

            if bm[0] % 2 == 0:
                if self.with_odd_num(bm):
                    steps.append({
                        'label': f'Строка {self.toStr(bm)} содержит нечетные элементы, сложим со строкой {self.toStr(help_b)}',
                        'type': 'matrix',
                        'data': np.array([am, bm + help_b, help_a, help_b])
                    })
                    bm += help_b
                steps.append({
                    'label': f'Строка {self.toStr(bm)} четна, делим на 2',
                    'type': 'matrix',
                    'data': np.array([am, bm // 2, help_a, help_b])
                })
                bm //= 2
                continue

            if bm[0] > am[0]:
                steps.append({
                    'label': f'{bm[0]} > {am[0]} => вычетам из второй строки первую',
                    'type': 'matrix',
                    'data': np.array([am, bm - am, help_a, help_b])
                })
                bm -= am
            else:
                steps.append({
                    'label': f'{bm[0]} <= {am[0]} => вычетам из первой строки вторую',
                    'type': 'matrix',
                    'data': np.array([am - bm, bm, help_a, help_b])
                })
                am -= bm

        steps.append({
            'label': f'Получаем первое линейное разложение числа {k * am[0]}',
            'type': 'string',
            'data': f'{k * am[0]} = {self.a * k} * {am[1]} + {self.b * k} * {am[2]}'
        })
        steps.append({
            'label': f'Получаем второе линейное разложение числа {k * bm[0]}',
            'type': 'string',
            'data': f'{k * bm[0]} = {self.a * k} * {bm[1]} + {self.b * k} * {bm[2]}'
        })

        return steps
