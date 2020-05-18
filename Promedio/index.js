function onlytext(e) {
    console.log(e);
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron =/[A-Za-z\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
function calculate() {

    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    if (name1 === "" || name2 === "" || name3 === ""){
        alert ("El campo nombre está vacío");
        return false;
    }

    var grades1 = document.getElementsByClassName("grade-1");
    var grades2 = document.getElementsByClassName("grade-2");
    var grades3 = document.getElementsByClassName("grade-3");
    var finalGrades = document.getElementsByClassName("result");
    var students = document.getElementsByClassName("student");
    var bestNote = 0;
    var messageBestNote = "";

    for (var index = 0; index < grades1.length; index++) {
        var note1 = new Number(grades1[index].value);
        var note2 = new Number(grades2[index].value);
        var note3 = new Number(grades3[index].value);
        var sum = note1 + note2 + note3;
        var prom = sum /3;

        finalGrades[index].value = prom.toFixed(2);

        if (finalGrades[index].value >= bestNote){
            bestNote = finalGrades[index].value;
            messageBestNote = students[index].value + " con " + bestNote;
        }
    }
    document.getElementById("message").innerHTML = messageBestNote;
    
}

function handleNumber(event, mask) {
with (event) {
    stopPropagation()
    preventDefault()
    if (!charCode) return
    var c = String.fromCharCode(charCode)
    if (c.match(/[^-\d,]/)) return
    var symbols = ["^,*,¨,Ç,;,:,_,-,ç,´,ñ,+,`"];
    
    with (target) {
        var txt = value.substring(0, selectionStart) + c + value.substr(selectionEnd)
        var pos = selectionStart + 1
    }
}
var dot = count(txt, /\./, pos);
txt = txt.replace(/[^-\d,]/g,'');

var mask = mask.match(/^(\D*)\{(-)?(\d*|null)?(?:,(\d+|null))?\}(\D*)$/); if (!mask) return 
var sign = !!mask[2], decimals = +mask[4], integers = Math.max(0, +mask[3] - (decimals || 0))
if (!txt.match('^' + (!sign?'':'-?') + '\\d*' + (!decimals?'':'(,\\d*)?') + '$')) return

txt = txt.split(',')
console.log("mensaje: "+ txt[0]);
if (integers && txt[0] && count(txt[0],/\d/) > integers) return
if (decimals && txt[1] && txt[1].length > decimals) return
txt[0] = txt[0].replace(/\B(?=(\d{1})+(?!\d))/g, '.')
if (txt[0] == symbols) return 

if (txt[0] >= 0 && txt[0] <= 5) {
    with (event.target) {
        value = mask[1] + txt.join(',') + mask[5]
        selectionStart = selectionEnd = pos + (pos==1 ? mask[1].length : count(value, /\./, pos) - dot) 
    }
}

function count(str, c, e) {
    e = e || str.length
    for (var n=0, i=0; i<e; i+=1) if (str.charAt(i).match(c)) n+=1
    return n
}
}

