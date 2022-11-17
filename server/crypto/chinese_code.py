
def main():
	cc = list(map(int, input('Enter chinese code: ').split()))
	m = list(map(int, input('Enter module: ').split()))

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

	print(ans)

def normalize(cc, m):
	for i in range(len(cc)):
		while cc[i] < 0:
			cc[i] += m[i]

		while cc[i] > m[i]:
			cc[i] -= m[i]

	return cc

def get_inverse(m, b):
	count = 1
	while m*count % b != 1:
		count += 1

	return count


if __name__ == '__main__':
	main()