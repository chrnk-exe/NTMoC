import AddDoubleInput from "./components/Algorithms/Inputs/Calculators/AddDoubleInput";
import FastPowInput from "./components/Algorithms/Inputs/Calculators/FastPowInput";
import KaratsubaInput from "./components/Algorithms/Inputs/Calculators/KaratsubaInput";
import KaratsubaExample from "./components/Examples/Calculators/KaratsubaExample";
import BinGcdInput from "./components/Algorithms/Inputs/Calculators/BinGcdInput";
import ExtBinGcdInput from "./components/Algorithms/Inputs/Calculators/ExtBinGcdInput";
import GelfondShanksInput from "./components/Algorithms/Inputs/DiscreteLogarithms/GelfondShanksInput";
import LinearComparisonInput from "./components/Algorithms/Inputs/Сomparisons/LinearComparisonInput";
import OneFieldInput from "./components/Algorithms/Inputs/common/OneFieldInput";


export const CalculatorRoutes = [
	{
		type: 'add_double', title: 'Сложение удвоение',
		Input: AddDoubleInput, Theory: null, Example: null
	},
	{
		type: 'fast_pow', title: 'Быстрое возведение степени',
		Input: FastPowInput, Theory: null, Example: null
	},
	{
		type: 'karatsuba', title: 'Алгоритм Карацубы',
		Input: KaratsubaInput, Theory: null, Example: KaratsubaExample
	},
	{
		type: 'bin_gcd', title: 'Бинарный алгоритм Евклида',
		Input: BinGcdInput, Theory: null, Example: null
	},
	{
		type: 'ext_bin_gcd', title: 'Расширенный бинарный алгоритм Евклида',
		Input: ExtBinGcdInput, Theory: null, Example: null
	},
	{
		type: 'to_cc', title: 'Перевод в китайский код',
		Input: OneFieldInput, Theory: null, Example: null
	},
	{
		type: 'from_cc_to_polycode', title: 'Перевод из CC в полиадический код',
		Input: null, Theory: null, Example: null
	}
];

export const FactorizationRoutes = [
	{
		type: 'dixon', title: 'Алгоритм Диксона',
		Input: OneFieldInput, Theory: null, Example: null
	},
	{
		type: 'rho_pollard_fact', title: 'Ро-метод Полларда',
		Input: OneFieldInput, Theory: null, Example: null
	},
	{
		type: 'rho_pollard_floyd_fact', title: 'Ро-метод Полларда (Мод. Флойда)',
		Input: OneFieldInput, Theory: null, Example: null
	},
	{
		type: 'p_1_pollard', title: 'P-1 метод Полларда',
		Input: OneFieldInput, Theory: null, Example: null
	},
	{
		type: 'fermat', title: 'Метод Ферма',
		Input: OneFieldInput, Theory: null, Example: null
	},
];

export const LogarithmRoutes = [
	{
		type: 'adleman', title: 'Алгоритм Адлемана',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'gelfond_shanks', title: 'Алгоритм Гельфонда-Шенкса',
		Input: GelfondShanksInput, Theory: null, Example: null
	},
	{
		type: 'rho_pollard_floyd_ind', title: 'Ро-метод Полларда',
		Input: null, Theory: null, Example: null
	}
];

export const ComparisonsRoutes = [
	{
		type: 'tonelli_shenks', title: 'Алгоритм Тонелли-Шенкса',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'tonelli_shenks_ext', title: 'Обобщённый алгоритм Тонелли-Шенкса',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'chipolla', title: 'Алгоритм Чиполлы',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'berlekamp_rabin', title: 'Алгоритм Берлекэмпа-Рабина',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'polyg_hellman', title: 'Алгоритм Полига-Хеллмана',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'linear_comparison', title: 'Решение линейного сравнения',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'solve_lin_comparison', title: 'Решить линейное сравнение (составной модуль)',
		Input: LinearComparisonInput, Theory: null, Example: null
	},
	{
		type: 'solve_lin_comparasion_cto', title: 'Решить линейное сравнение (КТО)',
		Input: null, Theory: null, Example: null
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

export const AlgRoutes = [
	...CalculatorRoutes,
	...FactorizationRoutes,
	...LogarithmRoutes,
	...ComparisonsRoutes
];