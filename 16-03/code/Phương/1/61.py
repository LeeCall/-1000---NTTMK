while True:
	n = int(input("Nhap n: "))
	if n <= 0:
		print("Nhap lai n!")
	else:
		CheckGiam = True
		flag = n
		SoCuoi = flag % 10
		flag = int(flag / 10)
		while flag != 0:
			SoKeCuoi = flag % 10
			flag = int(flag / 10)
			if SoCuoi > SoKeCuoi:
				CheckGiam = False
				break
			else:
				SoCuoi = SoKeCuoi
	break
if CheckGiam == True:
	print("Giam dan")
else:
	print("Khong giam dan")