while True:
	n = int(input("Nhap so nguyen duong n: "))
	if n <= 0:
		print("N phai > 0. Nhap lai gium cai!")
	else:
		print(f"Cac uoc so cua {n} la: ")
		for i in range(1,n+1):
			if n % i == 0:
				print(i)
		break