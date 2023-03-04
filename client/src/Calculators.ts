
export const CalculatorRoutes = [
	{
		link: '/add_double',
		title: 'Сложение удвоение'
	},
	{
		link: '/fast_pow',
		title: 'Быстрое возведение степени'
	},
	{
		link: '/karatsuba',
		title: 'Алгоритм Карацубы'
	},
	{
		link: '/bin_gcd',
		title: 'Бинарный алгоритм Евклида'
	},
	{
		link: '/ext_bin_gcd',
		title: 'Расширенный бинарный алгоритм Евклида',
	},
	{
		link: '/to_cc',
		title: 'Перевод в китайский код'
	},
	{
		link: '/from_cc_to_polycode',
		title: 'Перевод из CC в полиадический код'
	}
];

export const FactorizationRoutes = [
	{
		link: '/dixon',
		title: 'Алгоритм Диксона'
	},
	{
		link: '/rho_pollard_fact',
		title: 'Ро-метод Полларда'
	},
	{
		link: '/rho_pollard_floyd_fact',
		title: 'Ро-метод Полларда (Мод. Флойда)'
	},
	{
		link: '/p_1_pollard',
		title: 'P-1 метод Полларда'
	},
	{
		link: '/fermat',
		title: 'Метод Ферма'
	},
];

export const LogarithmRoutes = [
	{
		link: '/adleman',
		title: 'Алгоритм Адлемана'
	},
	{
		link: '/gelfond_shanks',
		title: 'Алгоритм Гельфонда-Шенкса'
	},
	{
		link: '/rho_pollard_floyd_ind',
		title: 'Ро-метод Полларда'
	}
];

export const ComparisonsRoutes = [
	{
		link: '/tonelli_shenks',
		title: 'Алгоритм Тонелли-Шенкса'
	},
	{
		link: '/tonelli_shenks_ext',
		title: 'Обобщённый алгоритм Тонелли-Шенкса'
	},
	{
		link: '/chipolla',
		title: 'Алгоритм Чиполлы'
	},
	{
		link: '/berlekamp_rabin',
		title: 'Алгоритм Берлекэмпа-Рабина'
	},
	{
		link: '/polyg_hellman',
		title: 'Алгоритм Полига-Хеллмана'
	},
	{
		link: '/linear_comparison',
		title: 'Решение линейного сравнения'
	},
	{
		link: '/solve_lin_comparasion',
		title: 'Решить линейное сравнение (составной модуль)'
	},
	{
		link: '/solve_lin_comparasion_cto',
		title: 'Решить линейное сравнение (КТО)'
	},
];

export const MenuList = [
	{
		title: 'Калькуляторы',
		Routes: CalculatorRoutes,
		About: 'Страничка о калькуляторах',
	},
	{
		title: 'Методы Факторизации',
		Routes: FactorizationRoutes,
		About: 'Инфа о методах факторизации',
	},
	{
		title: 'Методы Дискретного логарифмирования',
		Routes: LogarithmRoutes,
		About: 'Инфа о методах Дискретного логарифмирования',
	},
	{
		title: 'Решение сравнений',
		Routes: ComparisonsRoutes,
		About: 'Инфа о методах решения сравнения',
	}
];