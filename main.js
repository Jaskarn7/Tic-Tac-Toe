function reset_grid()
{
    for (var i = 1; i <= 9; ++i) 
        document.getElementById(i.toString()).innerHTML = i.toString();
    
    document.getElementById("cur_turn").innerHTML = "X's turn";
}

function g_i_html(n) 
{
    return document.getElementById(n).innerHTML;
}

function on_win()
{
    var n = (g_i_html("cur_turn") == "X's turn") ? 'O' : 'X';
    window.alert(n + " Wins!");
    
    reset_grid();
}

function check()
{
    arr = [];

    for (var i = 1; i <= 9; ++i)
        arr.push(g_i_html(i.toString()));

    // Check rows
    for (var i = 0; i < 9; i += 3)
        if (arr[i] == arr[i+1] && arr[i] == arr[i+2])
            on_win();

    // Check columns
    for (var i = 0; i < 3; ++i)
        if (arr[i] == arr[i+3] && arr[i] == arr[i+6])
            on_win();

    // Check diagonals
    if(arr[0] == arr[4] && arr[4] == arr[8])
        on_win();
    else if (arr[2] == arr[4] && arr[4] == arr[6])
        on_win();
}

function addmove(n)
{
    var data = '';

    if (g_i_html(n) == 'X' || g_i_html(n) == 'O')
        return;
    
    if (document.getElementById('cur_turn').innerHTML == "X's turn")
        data += 'X';
    else
        data += 'O';

    document.getElementById(n).innerHTML = data;
    
    if (data == 'X')
        document.getElementById('cur_turn').innerHTML = "O's turn";
    else
        document.getElementById('cur_turn').innerHTML = "X's turn";

    check();    
}