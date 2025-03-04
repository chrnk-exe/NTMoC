import AddDoubleInput from "./components/algorithms/Inputs/Calculators/AddDoubleInput";
import FastPowInput from "./components/algorithms/Inputs/Calculators/FastPowInput";
import KaratsubaInput from "./components/algorithms/Inputs/Calculators/KaratsubaInput";
import GelfondShanksInput from "./components/algorithms/Inputs/DiscreteLogarithms/GelfondShanksInput";
import LinearComparisonInput from "./components/algorithms/Inputs/Сomparisons/LinearComparisonInput";
import OneFieldInput from "./components/algorithms/Inputs/common/OneFieldInput";
import ChineseCode from "./components/algorithms/Inputs/Calculators/ChineseCode";
import Gcd from "./components/algorithms/Inputs/Calculators/Gcd";
import InverseInput from "./components/algorithms/Inputs/Base/InverseInput";
import PhiInput from "./components/algorithms/Inputs/Base/PhiInput";
import LEulerInput from "./components/algorithms/Inputs/Base/LEulerInput";
import OrderInput from "./components/algorithms/Inputs/Base/OrderInput";
import LCMInput from "./components/algorithms/Inputs/Base/LCMInput";
import PrimeRootInput from "./components/algorithms/Inputs/Base/PrimeRootInput";

import KaratsubaExample from "./components/examples/Calculators/KaratsubaExample";
import InverseExample from "./components/examples/Base/InverseExample";
import PrimeRootExample from "./components/examples/Base/PrimeRootExample";

import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import ElderlyIcon from '@mui/icons-material/Elderly';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import AddDoubleTheory from "./components/theory/Calculators/AddDoubleTheory";
import InverseTheory from "./components/theory/base/InverseTheory";
import PhiTheory from "./components/theory/base/PhiTheory";
import LEulerTheory from "./components/theory/base/LEulerTheory";
import LCMTheory from "./components/theory/base/LCMTheory";
import OrderTheory from "./components/theory/base/OrderTheory";
import PrimeRootTheory from "./components/theory/base/PrimeRootTheory";


export const BaseRoutes = [
	{
		type: 'inverse', title: 'Обратный элемент по модулю',
		Input: InverseInput, Theory: InverseTheory, Example: InverseExample, disable: false
	},
	{
		type: 'prime_root', title: 'Первообразный корень',
		Input: PrimeRootInput, Theory: PrimeRootTheory, Example: PrimeRootExample, disable: false
	},
	{
		type: 'l_euler', title: 'Эль-функция Эйлера',
		Input: LEulerInput, Theory: LEulerTheory, Example: null, disable: false
	},
	{
		type: 'lcm', title: 'Наименьшее общее кратное (НОК)',
		Input: LCMInput, Theory: LCMTheory, Example: null, disable: false
	},
	{
		type: 'order', title: 'Порядок числа (Метод перебора)',
		Input: OrderInput, Theory: OrderTheory, Example: null, disable: false
	},
	{
		type: 'phi_euler', title: 'Фи-функция Эйлера',
		Input: PhiInput, Theory: PhiTheory, Example: null, disable: false
	},
	{
		type: 'order_number', title: 'Число, отвечающее заданному показателю',
		Input: null, Theory: null, Example: null, disable: true
	},
];

export const CalculatorRoutes = [
	{
		type: 'add_double', title: 'Произведение чисел по модулю (алгоритм сложения-удвоения)',
		Input: AddDoubleInput, Theory: AddDoubleTheory, Example: null, disable: false
	},
	{
		type: 'fast_pow', title: 'Возведение в степень по модулю',
		Input: FastPowInput, Theory: null, Example: null, disable: false
	},
	{
		type: 'karatsuba', title: 'Алгоритм Карацубы',
		Input: KaratsubaInput, Theory: null, Example: KaratsubaExample, disable: false
	},
	{
		type: 'cc_to_int', title: 'Перевод китайского кода в число (Китайская теорема об остатках)',
		Input: ChineseCode, Theory: null, Example: null, disable: false
	},
	{
		type: 'cc_to_poly', title: 'Перевод китайского кода в полиадический код',
		Input: ChineseCode, Theory: null, Example: null, disable: true
	},
	{
		type: 'power_tower', title: 'Решение степенной башни',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'smart_order', title: 'Порядок числа (с использованием свойств)',
		Input: null, Theory: null, Example: null, disable: true
	},
];

export const EuclidRoutes = [
	{
		type: 'gcd', title: 'Алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null, disable: false
	},
	{
		type: 'bin_gcd', title: 'Бинарный алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null, disable: false
	},
	{
		type: 'ext_gcd', title: 'Расширенный алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null, disable: false
	},
	{
		type: 'ext_bin_gcd', title: 'Расширенный бинарный алгоритм Евклида',
		Input: Gcd, Theory: null, Example: null, disable: false
	},
]

export const FactorizationRoutes = [
	{
		type: 'dixon', title: 'Алгоритм Диксона',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'rho_pollard_fact', title: 'Ро-метод Полларда',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'rho_pollard_floyd_fact', title: 'Ро-метод Полларда (Мод. Флойда)',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'p_1_pollard', title: 'P-1 метод Полларда',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'fermat', title: 'Метод Ферма',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
];

export const LogarithmRoutes = [
	{
		type: 'adleman', title: 'Алгоритм Адлемана',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'gelfond_shanks', title: 'Алгоритм Гельфонда-Шенкса',
		Input: GelfondShanksInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'rho_pollard_floyd_ind', title: 'Ро-метод Полларда',
		Input: null, Theory: null, Example: null, disable: true
	}
];

export const ComparisonsRoutes = [
	{
		type: 'tonelli_shenks', title: 'Алгоритм Тонелли-Шенкса',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'tonelli_shenks_ext', title: 'Обобщённый алгоритм Тонелли-Шенкса',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'chipolla', title: 'Алгоритм Чиполлы',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'berlekamp_rabin', title: 'Алгоритм Берлекэмпа-Рабина',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'polyg_hellman', title: 'Алгоритм Полига-Хеллмана',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'linear_comparison', title: 'Решение линейного сравнения',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'solve_lin_comparison', title: 'Решить линейное сравнение (составной модуль)',
		Input: LinearComparisonInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'solve_lin_comparasion_cto', title: 'Решить линейное сравнение (КТО)',
		Input: null, Theory: null, Example: null, disable: true
	},
];

export const MenuList = [
	{
		title: 'Базовые операции',
		Routes: BaseRoutes,
		icon: AccountBalanceIcon
	},
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
	...BaseRoutes,
	...CalculatorRoutes,
	...EuclidRoutes,
	...FactorizationRoutes,
	...LogarithmRoutes,
	...ComparisonsRoutes,
];

// Algorithms.map(alg => console.log('https://crypto-math.com/' + alg.type) )
