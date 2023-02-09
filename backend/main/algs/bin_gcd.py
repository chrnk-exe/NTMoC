

class BinGcd:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def solve(self):
        response = {
            'label': f'Вычислим D({self.a}, {self.b})',
            'type': 'string',
        }
        steps = self.bin_gcd()
        response.update({'data': steps})
        return [response]

    def bin_gcd(self):
        gcd = 1
        steps = ''

        while self.a != self.b:
            if self.a % 2 == 0 and self.b % 2 == 0:
                gcd *= 2
                self.a //= 2
                self.b //= 2
            elif self.a % 2 == 0:
                self.a //= 2
            elif self.b % 2 == 0:
                self.b //= 2
            elif self.a > self.b:
                self.a -= self.b
            else:
                self.b -= self.a

            steps += "{} * D({}, {}) = ".format(gcd, self.a, self.b)
        steps += "{} * {} = ".format(gcd, self.a) + f"{gcd * self.a}"

        return steps
