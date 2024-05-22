var output = document.getElementById('output');

function insertZero()
{
    output.textContent = output.textContent + '0';
}

function insertOne()
{
    output.textContent = output.textContent + '1';
}

function insertTwo()
{
    output.textContent = output.textContent + '2';
}

function insertThree()
{
    output.textContent = output.textContent + '3';
}

function insertFour()
{
    output.textContent = output.textContent + '4';
}

function insertFive()
{
    output.textContent = output.textContent + '5';
}

function insertSix()
{
    output.textContent = output.textContent + '6';
}

function insertSeven()
{
    output.textContent = output.textContent + '7';
}

function insertEight()
{
    output.textContent = output.textContent + '8';
}

function insertNine()
{
    output.textContent = output.textContent + '9';
}

function insertDecimal()
{
    output.textContent = output.textContent + '.';
}

function insertAdd()
{
    if (!(output.textContent.includes('+') || output.textContent.includes('-') || output.textContent.includes('×') || output.textContent.includes('÷') || output.textContent.includes('^') || output.textContent.includes('%')))
    {
        output.textContent = output.textContent + '+';
    }
}

function insertSubtract()
{
    if (!(output.textContent.includes('+') || output.textContent.includes('-') || output.textContent.includes('×') || output.textContent.includes('÷') || output.textContent.includes('^') || output.textContent.includes('%')))
    {
        output.textContent = output.textContent + '-';
    }
}

function insertMultiply()
{
    if (!(output.textContent.includes('+') || output.textContent.includes('-') || output.textContent.includes('×') || output.textContent.includes('÷') || output.textContent.includes('^') || output.textContent.includes('%')))
    {
        output.textContent = output.textContent + '×';
    }
}

function insertDivide()
{
    if (!(output.textContent.includes('+') || output.textContent.includes('-') || output.textContent.includes('×') || output.textContent.includes('÷') || output.textContent.includes('^') || output.textContent.includes('%')))
    {
        output.textContent = output.textContent + '÷';
    }
}

function insertPower()
{
    if (!(output.textContent.includes('+') || output.textContent.includes('-') || output.textContent.includes('×') || output.textContent.includes('÷') || output.textContent.includes('^') || output.textContent.includes('%')))
    {
        output.textContent = output.textContent + '^';
    }
}

function insertModulo()
{
    if (!(output.textContent.includes('+') || output.textContent.includes('-') || output.textContent.includes('×') || output.textContent.includes('÷') || output.textContent.includes('^') || output.textContent.includes('%')))
    {
        output.textContent = output.textContent + '%';
    }
}

function getAnswer()
{
    if (output.textContent != '')
    {
        if (output.textContent.includes('+'))
        {
            var nums = output.textContent.split('+');

            if (nums[1] != '')
            {
                output.textContent = parseFloat(nums[0]) + parseFloat(nums[1]);
            }
        }
        else if (output.textContent.includes('-'))
        {
            var nums = output.textContent.split('-');

            if (nums[1] != '')
            {
                output.textContent = parseFloat(nums[0]) - parseFloat(nums[1]);
            }
        }
        else if (output.textContent.includes('×'))
        {
            var nums = output.textContent.split('×');

            if (nums[1] != '')
            {
                output.textContent = parseFloat(nums[0]) * parseFloat(nums[1]);
            }
        }
        else if (output.textContent.includes('÷'))
        {
            var nums = output.textContent.split('÷');

            if (nums[1] != '')
            {
                output.textContent = parseFloat(nums[0]) / parseFloat(nums[1]);
            }
        }
        else if (output.textContent.includes('^'))
        {
            var nums = output.textContent.split('^');

            if (nums[1] != '')
            {
                output.textContent = Math.pow(parseFloat(nums[0]), parseFloat(nums[1]));
            }
        }
        else if (output.textContent.includes('%'))
        {
            var nums = output.textContent.split('%');

            if (nums[1] != '')
            {
                output.textContent = parseFloat(nums[0]) % parseFloat(nums[1]);
            }
        }
    }
}

function del()
{
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
}

function clear()
{
    output.textContent = '';
}

function init()
{
    document.getElementById('delete').onclick = del;
    document.getElementById('clear').onclick = clear;
    document.getElementById('zero').onclick = insertZero;
    document.getElementById('one').onclick = insertOne;
    document.getElementById('two').onclick = insertTwo;
    document.getElementById('three').onclick = insertThree;
    document.getElementById('four').onclick = insertFour;
    document.getElementById('five').onclick = insertFive;
    document.getElementById('six').onclick = insertSix;
    document.getElementById('seven').onclick = insertSeven;
    document.getElementById('eight').onclick = insertEight;
    document.getElementById('nine').onclick = insertNine;
    document.getElementById('decimal').onclick = insertDecimal;
    document.getElementById('add').onclick = insertAdd;
    document.getElementById('subtract').onclick = insertSubtract;
    document.getElementById('multiply').onclick = insertMultiply;
    document.getElementById('divide').onclick = insertDivide;
    document.getElementById('power').onclick = insertPower;
    document.getElementById('modulo').onclick = insertModulo;
    document.getElementById('equals').onclick = getAnswer;
}

init();