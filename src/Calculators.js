import AddDoubleInput from "./components/algorithms/Inputs/Calculators/AddDoubleInput";
import FastPowInput from "./components/algorithms/Inputs/Calculators/FastPowInput";
import KaratsubaInput from "./components/algorithms/Inputs/Calculators/KaratsubaInput";
import KaratsubaExample from "./components/examples/Calculators/KaratsubaExample";
import GelfondShanksInput from "./components/algorithms/Inputs/DiscreteLogarithms/GelfondShanksInput";
import LinearComparisonInput from "./components/algorithms/Inputs/Сomparisons/LinearComparisonInput";
import OneFieldInput from "./components/algorithms/Inputs/common/OneFieldInput";
import ChineseCode from "./components/algorithms/Inputs/Calculators/ChineseCode";
import Gcd from "./components/algorithms/Inputs/Calculators/Gcd";


import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import ElderlyIcon from '@mui/icons-material/Elderly';
import AddDoubleTheory from "./components/theory/Calculators/AddDoubleTheory";
import FastPowTheory from "./components/theory/Calculators/FastPowTheory";
import KaratsubaTheory from "./components/theory/Calculators/KaratsubaTheory";
import ChineseCodeTheory from "./components/theory/Calculators/ChineseCodeTheory";
import GcdTheory from "./components/theory/Calculators/GcdTheory";
import GelfondShanksTheory from "./components/theory/DiscreteLogarithms/GelfondShanksTheory";
import LinearComparisonTheory from "./components/theory/Сomparisons/LinearComparisonTheory";


export const CalculatorRoutes = [
	{
		type: 'add_double', title: 'Произведение чисел по модулю (алгоритм сложения-удвоения)',
		Input: AddDoubleInput, Theory: AddDoubleTheory, Example: null
	},
	{
		type: 'fast_pow', title: 'Возведение в степень по модулю',
		Input: FastPowInput, Theory: null, Example: null
	},
	{
		type: 'karatsuba', title: 'Алгоритм Карацубы',
		Input: KaratsubaInput, Theory: null, Example: KaratsubaExample
	},
	{
		type: 'cc_to_int', title: 'Перевод китайского кода в число (Китайская теорема об остатках)',
		Input: ChineseCode, Theory: null, Example: null
	},
	{
		type: 'cc_to_poly', title: 'Перевод китайского кода в полиадический код (не работает)',
		Input: ChineseCode, Theory: null, Example: null
	}
];
export const EuclidRoutes = [
	{
		type: 'gcd', title: 'Алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null
	},
	{
		type: 'bin_gcd', title: 'Бинарный алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null
	},
	{
		type: 'ext_gcd', title: 'Расширенный алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null
	},
	{
		type: 'ext_bin_gcd', title: 'Расширенный бинарный алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null
	},
]

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
		icon: CalculateOutlinedIcon
	},
	{
		title: 'Алгоритм Евклида',
		Routes: EuclidRoutes,
		icon: ElderlyIcon
	},
	{
		title: 'Методы факторизации',
		Routes: FactorizationRoutes,
		icon: AcUnitOutlinedIcon
	},
	{
		title: 'Методы дискретного логарифмирования',
		Routes: LogarithmRoutes,
		icon: DiamondOutlinedIcon
	},
	{
		title: 'Решение сравнений',
		Routes: ComparisonsRoutes,
		icon: BalanceOutlinedIcon
	}
];

export const Algorithms = [
	...CalculatorRoutes,
	...EuclidRoutes,
	...FactorizationRoutes,
	...LogarithmRoutes,
	...ComparisonsRoutes,
];