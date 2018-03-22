while True:
	n = int(input("Nhap n: "))
	if n <= 0:
		print("Nhap lai n gium!")
	else:
		CheckTang = True
		flag = n
		SoCuoi = flag % 10
		flag = int(flag/10)
		while flag != 0:
			SoKeCuoi = flag % 10
			flag = int(flag / 10)
			if SoCuoi < SoKeCuoi:
				CheckTang = False
				break
			else:
				SoCuoi = SoKeCuoi
	break
if CheckTang == True:
	print(True)
else:
	print(False)