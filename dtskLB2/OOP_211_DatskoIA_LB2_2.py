import sys
x = int(input('введіть трьохначне число: '))
m = [x//100, x//10%10, x%10]
for i in m:
    if i%2 == 0:
        print('True')
        sys.exit()
print('False')