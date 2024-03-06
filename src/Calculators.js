import AddDoubleInput from "./components/algorithms/Inputs/Calculators/AddDoubleInput";
import FastPowInput from "./components/algorithms/Inputs/Calculators/FastPowInput";
import KaratsubaInput from "./components/algorithms/Inputs/Calculators/KaratsubaInput";
import KaratsubaExample from "./components/examples/Calculators/KaratsubaExample";
import BinGcdInput from "./components/algorithms/Inputs/Calculators/BinGcdInput";
import ExtBinGcdInput from "./components/algorithms/Inputs/Calculators/ExtBinGcdInput";
import GelfondShanksInput from "./components/algorithms/Inputs/DiscreteLogarithms/GelfondShanksInput";
import LinearComparisonInput from "./components/algorithms/Inputs/Сomparisons/LinearComparisonInput";
import OneFieldInput from "./components/algorithms/Inputs/common/OneFieldInput";


import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import ChineseCodeToInt from "./components/algorithms/Inputs/Calculators/ChineseCodeToInt";


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
		type: 'cc_to_int', title: 'Перевод китайского кода в число (Китайская теорема об остатках)',
		Input: ChineseCodeToInt, Theory: null, Example: null
	},
	{
		type: 'int_to_cc', title: 'Перевод числа в китайский код',
		Input: null, Theory: null, Example: null
	},
	{
		type: 'cc_to_poly', title: 'Перевод китайского кода в полиадический код',
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
		icon: CalculateOutlinedIcon
	},
	{
		title: 'Методы факторизации',
		Routes: FactorizationRoutes,
		About: 'Инфа о методах факторизации',
		icon: AcUnitOutlinedIcon
	},
	{
		title: 'Методы дискретного логарифмирования',
		Routes: LogarithmRoutes,
		About: 'Инфа о методах Дискретного логарифмирования',
		icon: DiamondOutlinedIcon
	},
	{
		title: 'Решение сравнений',
		Routes: ComparisonsRoutes,
		About: 'Инфа о методах решения сравнения',
		icon: BalanceOutlinedIcon
	}
];

export const Algorithms = [
	...CalculatorRoutes,
	...FactorizationRoutes,
	...LogarithmRoutes,
	...ComparisonsRoutes
];