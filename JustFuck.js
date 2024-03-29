function range(size, start = 0){
    return Array.from({length : size}, (_, index) => index + start);
}
class __JustFuck__{
    constructor(num = 0){
        this.num = num;
    }
    JustFuck(Codes){
        var res = '';
        let exCode = "var var_list = [];var variable_pointer = 0;var value_pointer = 0;";
        for(let code of Codes){
            switch(code){
                case "!":
                    exCode = exCode + "variable_pointer += var_list.length === 0 ? 0 : 1;value_pointer += var_list.length === 0 ? 0 : 1;var_list.push(0);";
                    break;
                case "+":
                    exCode = exCode + "var_list[variable_pointer] ++;";
                    break;
                case "-":
                    exCode = exCode + "var_list[variable_pointer] --;";
                    break;
                case "*":
                    exCode = exCode + "var_list[variable_pointer] *= 10;";
                    break;
                case "<":
                    exCode = exCode + "value_pointer -= value_pointer === variable_pointer ? 1 : 0;";
                    exCode = exCode + "variable_pointer --;";
                    break;
                case ">":
                    exCode = exCode + "value_pointer += value_pointer === variable_pointer ? 1 : 0;";
                    exCode = exCode + "variable_pointer ++;";
                    break;
                case "{":
                    exCode = exCode + "value_pointer --;";
                    break;
                case "}":
                    exCode = exCode + "value_pointer ++;";
                    break;
                case ".":
                    exCode = exCode + "res = res + String.fromCharCode(var_list[value_pointer]);";
                    break;
                case "[":
                    exCode = exCode + "for(let i in range(var_list[value_pointer])){";
                    break;
                case "]":
                    exCode = exCode + "};";
                    break;
                case "(":
                    exCode = exCode + "while(var_list[value_pointer] >= 0){";
                    break;
                case ")":
                    exCode = exCode + "}";
                    break;
                default:
                    break;
            }
        }
        eval(exCode);
        return res;
    }
    JustFuckRes() {
        var code = document.getElementById('JustFuckCode').value;
        var result = this.JustFuck(code);
        document.getElementById('CodeResult').innerText = result;
    }
}
var JF=new __JustFuck__();
function JustFuckStart(){
    JF.JustFuckRes()
}
