input type="number" id="input">
<p id="result">Result :</p>
<br> <button onclick="check()">Check</button>

<script>
 let input = document.getElementById("input")   
let number = Math.floor(Math.random()*10+1)
console.log(number)

function check()
{

input = Number(input.value)

if (number==input)
{   let result = document.getElementById("result")
    result.textContent="Result :You're Right !"    }

else {
    result.textContent="Result : You're wrong !"  }

}
</script>
