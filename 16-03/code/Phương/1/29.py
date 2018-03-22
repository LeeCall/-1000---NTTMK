while True:
	n = int(input("Nhap n: "))
	if n <= 0:
		print("Nhap lai n!")
	else:
		maximum = 1
		for i in range(1,n+1):
			if (n % i == 0) & (i % 2 == 1):
				if i > maximum:
					maximum = i
	break
print(f"Uoc so le lon nhat cua {n} la: ", maximum)