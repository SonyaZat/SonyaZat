47 * true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
92,9,92,5,5,29,68,59,27,67,92,87,42,79,62,44,96,59,77,39,76,44,85,31,45,60,59,10,18,89,61,87,76,69,75,57,94,48,57,83,61,76,6,76,79,50,88,68,21,18,96 + true
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
92,11,11,23,68,20,70,55,76,95,16,31,87,53,90,49,94,50,75,12,90,64,88,78,39,49,63,80,29,35,99,81,41,3,91,47,86,72,63,97,98,39,59,21,78,53,19,10,2,34,93,91,58 + orange
const findSmallestNumber = numbers => Math.min(...numbers);
grape - 33
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
apple + 36
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
kiwi / 48
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const findSmallestNumber = numbers => Math.min(...numbers);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
31 / 88

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
33,9,70 * 31
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
