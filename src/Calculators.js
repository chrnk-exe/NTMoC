import AddDoubleInput from "./components/algorithms/Inputs/Calculators/AddDoubleInput";
import FastPowInput from "./components/algorithms/Inputs/Calculators/FastPowInput";
import KaratsubaInput from "./components/algorithms/Inputs/Calculators/KaratsubaInput";
import GelfondShanksInput from "./components/algorithms/Inputs/DiscreteLogarithms/GelfondShanksInput";
import LinearComparisonInput from "./components/algorithms/Inputs/Сomparisons/LinearComparisonInput";
import OneFieldInput from "./components/algorithms/Inputs/common/OneFieldInput";
import ChineseCode from "./components/algorithms/Inputs/Calculators/ChineseCode";
import InverseInput from "./components/algorithms/Inputs/Base/InverseInput";
import PhiInput from "./components/algorithms/Inputs/Base/PhiInput";
import LEulerInput from "./components/algorithms/Inputs/Base/LEulerInput";
import OrderInput from "./components/algorithms/Inputs/Base/OrderInput";
import LCMInput from "./components/algorithms/Inputs/Base/LCMInput";
import PrimeRootInput from "./components/algorithms/Inputs/Base/PrimeRootInput";
import OrderNumberInput from "./components/algorithms/Inputs/Base/OrderNumberInput";
import {BinGcdInput, ExtBinGcdInput, ExtGcdInput, GcdInput} from "./components/algorithms/Inputs/Calculators/Gcd";
import ChineseCodeToPolycode from "./components/algorithms/Inputs/Calculators/ChineseCodeToPolycode";
import ThePowerTowerInput from "./components/algorithms/Inputs/Calculators/ThePowerTowerInput";
import AdlemanLogarithmInput from "./components/algorithms/Inputs/DiscreteLogarithms/AdlemanLogarithmInput";
import RhoPollardInput from "./components/algorithms/Inputs/DiscreteLogarithms/RhoPollardInput";

import KaratsubaExample from "./components/examples/Calculators/KaratsubaExample";
import InverseExample from "./components/examples/Base/InverseExample";
import PrimeRootExample from "./components/examples/Base/PrimeRootExample";
import LEulerExample from "./components/examples/Base/LEulerExample";
import LCMExample from './components/examples/Base/LCMExample'
import SimpleOrderExample from "./components/examples/Base/SimpleOrderExample";
import PhiExample from "./components/examples/Base/PhiExample";
import OrderNumberExample from "./components/examples/Base/OrderNumberExample";
import GcdExample from "./components/examples/Euclid/GcdExample";
import BinGcdExample from "./components/examples/Euclid/BinGcdExample";
import ExtGcdExample from "./components/examples/Euclid/ExtGcdExample";
import ExtBinGcdExample from "./components/examples/Euclid/ExtBinGcdExample";
import FastPowExample from "./components/examples/Calculators/FastPowExample";
import ChineseCodeToPolycodeExample from "./components/examples/Calculators/ChineseCodeToPolycodeExample";
import ThePowerTowerExample from "./components/examples/Calculators/ThePowerTowerExample";
import GelfondShanksLogarithmExample from "./components/examples/Logarithms/GelfondShanksLogarithmExample";
import AdlemanLogarithmExample from "./components/examples/Logarithms/AdlemanLogarithmExample";
import RhoPollardExample from "./components/examples/Logarithms/RhoPollardExample";

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
import OrderNumberTheory from "./components/theory/base/OrderNumberTheory";
import GcdTheory from "./components/theory/Euclid/GcdTheory";
import BinGcdTheory from "./components/theory/Euclid/BinGcdTheory";
import ExtGcdTheory from "./components/theory/Euclid/ExtGcdTheory";
import ExtBinGcdTheory from "./components/theory/Euclid/ExtBinGcdTheory";
import FastPowTheory from "./components/theory/Calculators/FastPowTheory";
import ChineseCodeToPolycodeTheory from "./components/theory/Calculators/ChineseCodeToPolycodeTheory";
import ThePowerTowerTheory from "./components/theory/Calculators/ThePowerTowerTheory";
import GelfondShanksLogarithmTheory from "./components/theory/DiscreteLogarithms/GelfondShanksTheory";
import AdlemanLogarithmTheory from "./components/theory/DiscreteLogarithms/AdlemanLogarithmTheory";
import RhoPollardTheory from "./components/theory/DiscreteLogarithms/RhoPollardTheory";


export const BaseRoutes = [
	{
		type: 'inverse', title: 'Обратный элемент по модулю',
		origin: 'Modular Inverse',
		Input: InverseInput, Theory: InverseTheory, Example: InverseExample, disable: false
	},
	{
		type: 'prime_root', title: 'Первообразный корень',
		origin: 'Primitive Root',
		Input: PrimeRootInput, Theory: PrimeRootTheory, Example: PrimeRootExample, disable: false
	},
	{
		type: 'l_euler', title: 'Эль-функция Эйлера',
		origin: 'Euler\'s Totient Function (λ-function)',
		Input: LEulerInput, Theory: LEulerTheory, Example: LEulerExample, disable: false
	},
	{
		type: 'lcm', title: 'Наименьшее общее кратное (НОК)',
		origin: 'Least Common Multiple (LCM)',
		Input: LCMInput, Theory: LCMTheory, Example: LCMExample, disable: false
	},
	{
		type: 'order', title: 'Порядок числа (Метод перебора)',
		origin: 'Order of an Element (Brute Force)',
		Input: OrderInput, Theory: OrderTheory, Example: SimpleOrderExample, disable: false
	},
	{
		type: 'phi_euler', title: 'Фи-функция Эйлера',
		origin: 'Euler\'s Totient Function (φ-function)',
		Input: PhiInput, Theory: PhiTheory, Example: PhiExample, disable: false
	},
	{
		type: 'order_number', title: 'Число, отвечающее заданному показателю',
		origin: 'Element with Given Order',
		Input: OrderNumberInput, Theory: OrderNumberTheory, Example: OrderNumberExample, disable: false
	},
];

export const CalculatorRoutes = [
	{
		type: 'add_double', title: 'Произведение чисел по модулю (алгоритм сложения-удвоения)',
		origin: 'Multiply using Add-and-Double',
		Input: AddDoubleInput, Theory: AddDoubleTheory, Example: null, disable: false
	},
	{
		type: 'fast_pow', title: 'Возведение в степень по модулю',
		origin: 'Fast Modular Exponentiation',
		Input: FastPowInput, Theory: FastPowTheory, Example: FastPowExample, disable: false
	},
	{
		type: 'karatsuba', title: 'Алгоритм Карацубы',
		origin: 'Karatsuba Algorithm',
		Input: KaratsubaInput, Theory: null, Example: KaratsubaExample, disable: false
	},
	{
		type: 'cc_to_int', title: 'Перевод китайского кода в число (Китайская теорема об остатках)',
		origin: 'Chinese Remainder Theorem (CRT) to Integer',
		Input: ChineseCode, Theory: null, Example: null, disable: false
	},
	{
		type: 'cc_to_poly', title: 'Перевод китайского кода в полиадический код',
		origin: 'Chinese Remainder Theorem (CRT) to Polyadic Code',
		Input: ChineseCodeToPolycode, Theory: ChineseCodeToPolycodeTheory, Example: ChineseCodeToPolycodeExample, disable: false
	},
	{
		type: 'power_tower', title: 'Решение степенной башни',
		origin: 'Power Tower Evaluation',
		Input: ThePowerTowerInput, Theory: ThePowerTowerTheory, Example: ThePowerTowerExample, disable: false
	},
	{
		type: 'smart_order', title: 'Порядок числа (с использованием свойств)',
		origin: 'Order of an Element (with Properties)',
		Input: null, Theory: null, Example: null, disable: true
	},
];

export const EuclidRoutes = [
	{
		type: 'gcd', title: 'Алгоритм Евклида',
		origin: 'Euclidean Algorithm',
		Input: GcdInput, Theory: GcdTheory, Example: GcdExample, disable: false
	},
	{
		type: 'bin_gcd', title: 'Бинарный алгоритм Евклида',
		origin: 'Binary GCD Algorithm',
		Input: BinGcdInput, Theory: BinGcdTheory, Example: BinGcdExample, disable: false
	},
	{
		type: 'ext_gcd', title: 'Расширенный алгоритм Евклида',
		origin: 'Extended Euclidean Algorithm',
		Input: ExtGcdInput, Theory: ExtGcdTheory, Example: ExtGcdExample, disable: false
	},
	{
		type: 'ext_bin_gcd', title: 'Расширенный бинарный алгоритм Евклида',
		origin: 'Extended Binary GCD Algorithm',
		Input: ExtBinGcdInput, Theory: ExtBinGcdTheory, Example: ExtBinGcdExample, disable: false
	},
]

export const FactorizationRoutes = [
	{
		type: 'dixon', title: 'Алгоритм Диксона',
		origin: 'Dixon\'s Factorization Method',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'rho_pollard_fact', title: 'Ро-метод Полларда',
		origin: 'Pollard\'s Rho Factorization',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'rho_pollard_floyd_fact', title: 'Ро-метод Полларда (Мод. Флойда)',
		origin: 'Pollard\'s Rho with Floyd\'s Cycle Detection',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'p_1_pollard', title: 'P-1 метод Полларда',
		origin: 'Pollard\'s P-1 Method',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'fermat', title: 'Метод Ферма',
		origin: 'Fermat\'s Factorization Method',
		Input: OneFieldInput, Theory: null, Example: null, disable: true
	},
];

export const LogarithmRoutes = [
	{
		type: 'adleman', title: 'Алгоритм Адлемана',
		origin: 'Adleman\'s Algorithm',
		Input: AdlemanLogarithmInput, Theory: AdlemanLogarithmTheory, Example: AdlemanLogarithmExample, disable: true
	},
	{
		type: 'gelfond_shanks', title: 'Алгоритм Гельфонда-Шенкса',
		origin: 'Gelfond–Shanks Algorithm',
		Input: GelfondShanksInput, Theory: GelfondShanksLogarithmTheory, Example: GelfondShanksLogarithmExample, disable: false
	},
	{
		type: 'rho_pollard_floyd_ind', title: 'Ро-метод Полларда',
		origin: 'Pollard\'s Rho for Discrete Logarithm (Floyd)',
		Input: RhoPollardInput, Theory: RhoPollardTheory, Example: null, disable: false
	}
];

export const ComparisonsRoutes = [
	{
		type: 'tonelli_shenks', title: 'Алгоритм Тонелли-Шенкса',
		origin: 'Tonelli–Shanks Algorithm',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'tonelli_shenks_ext', title: 'Обобщённый алгоритм Тонелли-Шенкса',
		origin: 'Generalized Tonelli–Shanks Algorithm',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'chipolla', title: 'Алгоритм Чиполлы',
		origin: 'Cipolla\'s Algorithm',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'berlekamp_rabin', title: 'Алгоритм Берлекэмпа-Рабина',
		origin: 'Berlekamp–Rabin Algorithm',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'polyg_hellman', title: 'Алгоритм Полига-Хеллмана',
		origin: 'Pohlig–Hellman Algorithm',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'linear_comparison', title: 'Решение линейного сравнения',
		origin: 'Solve Linear Congruence',
		Input: null, Theory: null, Example: null, disable: true
	},
	{
		type: 'solve_lin_comparison', title: 'Решить линейное сравнение (составной модуль)',
		origin: 'Solve Linear Congruence (Composite Modulus)',
		Input: LinearComparisonInput, Theory: null, Example: null, disable: true
	},
	{
		type: 'solve_lin_comparasion_cto', title: 'Решить линейное сравнение (КТО)',
		origin: 'Solve Linear Congruence (CRT)',
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
