while True:
	n = int(input("Nhap n: "))
	if n <= 0:
		print("Nhap lai!")
	else:
		S = 0
		flag = n
		while flag != 0:
			S = S + flag % 10
			flag = int(flag / 10)
	break

print (S)