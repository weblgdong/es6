class Calculate {

    /**
     * @function {computeCount 计算注数}
     * @param  {Number} active    {当前选中的号码}
     * @param  {string} play_name {当前玩法的标示}
     * @return {number} {number}
     */
    computeCount(active, play_name) {
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr = new Array(active).fill('0');
        if (exist && play_name.at(0) == 'r') {
            count = Calculate.combine(err, play_name.split('')[1]);
        }
        return count;
    }

    /**
     * @function {computeBonus 奖金范围预测}
     * @param  {number} active    {当前选中的号码}
     * @param  {string} play_name {当前玩法的标示}
     * @return {array} {奖金范围}
     */
    computeBonus(active, play_name) {
        const play = play_name.split('');
        const self = this;
        let arr= new Array(play[1]*1).fill(0);
    }

    /**
     * @function {组合运算}
     * @param  {array} arr  {参与组合运算的数组}
     * @param  {number} size {组合运算的基数}
     * @return {number} {计算注数}
     */
    static combine(arr, size) {
        let allResult = [];
        (function f(arr, size, result) {
            let arrLen = arr.length;
            if (size > arrLen) {
                return;
            }
            if (size === arrLen) {
                allResult.push([].concat(result, arr));
            } else {
                for (let i = 0; i < arrLen; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size === 1) {
                        allResult.push(newResult);
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, []);
    }
}