import math
import sys
x = int(input('введіть трьохначне число: '))
v = x*x
print(v)
m = x//100 + x//10%10 + x%10
m = m*m*m
print(m)
if m == v:
    print('true')
else: print('false')