// @ts-check
/**
 * 프로젝트를 초기화한다.
 * param에 입력값을 받고 입력값의 데이터 타입은 객체이다.
 * @param {object} config
 * config 객체 안에는 boolean
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * 프로그램을 종료시킨다.
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
