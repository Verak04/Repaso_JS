var x = 10;
var y = 20;
x = x + x + 1;
y = y - y - x;
alert("Test A " + "x=" + x + " y=" + y);

x = 10;
y = 20;
x = (x - y) + 4;
y = 4 + (y + 5);
alert("Test B " + "x=" + x + " y=" + y);

x = 10;
y = 20;
x = x * 2 - 4;
y = 4 - y * 2;
alert("Test C " + "x=" + x + " y=" + y);

x = 10;
y = 20;
x = (20 - x) / y;
y = x + 2 / y;
alert("Test D " + "x=" + x + " y=" + y);

x = 10;
y = 20;
x = ((1 - x) * (y / 8)) * 4 * 0;
y = (x + 3) / x;
alert("Test E " + "x=" + x + " y=" + y);
