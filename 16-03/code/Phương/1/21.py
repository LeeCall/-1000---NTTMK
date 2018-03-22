while True:
	n = int(input("Nhap n gium: "))
	if n <= 0:
		print("Nhap lai n gium!")
	else:
		S = 0		
		for i in range(1,n+1):
			if n % i == 0:
				S = S + i
	break
print(f"Tong cac uoc so cua {n} = ", S)