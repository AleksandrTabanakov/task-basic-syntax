import { O_DIRECT } from 'constants';

export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
        | Символ | Значение |
        | ------ | -------- |
        | I      | 1        |
        | V      | 5        |
        | X      | 10       |
        | L      | 50       |
        | C      | 100      |
        | D      | 500      |
        | M      | 1000     |
     */
    let flag = 0;
    for (let i = str.length - 1; i > 0; i--) {
        let znach1 = 0;
        let znach2 = 0;

        if (str[i - 1] == 'M' || str[i] == 'M') {
            if (str[i - 1] == 'M') znach1 = 1000;
            if (str[i] == 'M') znach2 = 1000;
        }
        if (str[i - 1] == 'D' || str[i] == 'D') {
            if (str[i - 1] == 'D') znach1 = 500;
            if (str[i] == 'D') znach2 = 500;
        }
        if (str[i - 1] == 'C' || str[i] == 'C') {
            if (str[i - 1] == 'C') znach1 = 100;
            if (str[i] == 'C') znach2 = 100;
        }
        if (str[i - 1] == 'L' || str[i] == 'L') {
            if (str[i - 1] == 'L') znach1 = 50;
            if (str[i] == 'L') znach2 = 50;
        }
        if (str[i - 1] == 'X' || str[i] == 'X') {
            if (str[i - 1] == 'X') znach1 = 10;
            if (str[i] == 'X') znach2 = 10;
        }
        if (str[i - 1] == 'V' || str[i] == 'V') {
            if (str[i - 1] == 'V') znach1 = 5;
            if (str[i] == 'V') znach2 = 5;
        }
        if (str[i - 1] == 'I' || str[i] == 'I') {
            if (str[i - 1] == 'I') znach1 = 1;
            if (str[i] == 'I') znach2 = 1;
        }
        if (flag == 1) {
            result += znach1;
            break;
        }
        if (znach2 > znach1 && (znach1 == 1 || znach1 == 10 || znach1 == 100)) {
            i--;
            result += znach2 - znach1;
            if (i == 1) {
                i++;
                flag = 1;
            }
        } else {
            result += znach2;
            if (i == 1) result += znach1;
        }
    }
    return result;
}
