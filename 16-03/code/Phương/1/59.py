while True:
	n = int(input("Nhap n: "))
	if n <= 0:
		print("Nhap lai n gium!")
	else:
		SoNghichDao = 0
		flag = n
		while flag != 0:
			SoNghichDao = SoNghichDao * 10 + flag % 10
			flag = int(flag / 10)
	break
if SoNghichDao == n:
	print("{0:2d} la so doi xung!".format(SoNghichDao))
else:
	print("{0:2d} ko phai so doi xung".format(SoNghichDao))