while True:
	n = int(input("Nhap n: "))
	if n <= 0:
		print("Nhap lai n!")
	else:
		S = 0
		for i in range(1,n):
			if n % i == 0:
				S += i
	break
if S == n:
	print(f"{n} la so hoan thien")
else:
	print(f"{n} is fcking not a so hoan thien")