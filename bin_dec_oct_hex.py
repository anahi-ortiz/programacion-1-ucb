# 1. converciones
#convertir de binario a decimal
def binario_a_decimal(binario):
    decimal = 0
    for bit in binario:
        decimal = decimal *2 +int(bit)
    return decimal

# de decimal a octal
def dec_a_bin(decimal):
    return bin(decimal)[2:]

def dec_a_oct(decimal):
    return oct(decimal)[2:]

def dec_a_hex(decimal):
    return hex(decimal)[2:].upper()
#2. sumar dos numeros binarios y mostrar el resultado en decimal

def sum_bin(bin1, bin2):
    dec1 = binario_a_decimal(bin1)
    dec2 = binario_a_decimal(bin2)
    return dec1 + dec2

# 3. hexa a binario
def hex_a_bin(hex_num):
    return bin(int(hex_num, 16))[2:]

def bin_a_hex(bin_num):
    return hex(int(bin_num, 2))[2:].upper()

#4. operaciones aritméticas básicas suma, resta, multiplicación, división con su resulta
def operacion_binarias(bin1, bin2):
    a = binario_a_decimal(bin1)
    b = binario_a_decimal(bin2)
    print("Suma:", dec_a_bin(a + b))
    print("Resta:", dec_a_bin(a - b))
    print("Multiplicación:", dec_a_bin(a * b))
    print("División:", dec_a_bin(a // b))

#5. tabla de multiplicar
def tabla_de_multiplicar(numero):
    i = 1
    while i <= 10:
        print(f"{numero} x {i} = {numero * i}")
        i += 1

#6. suma de los numeros pares
def suma_pares(inicio, fin):
    suma = 0
    for i in range(inicio, fin + 1):
        if i % 2 == 0:
            suma += i
    return suma


#7. suma de los primos
def suma_primos(inicio, fin):
    suma_pri = 0
    for i in range(inicio, fin + 1):
        if i > 1:
            es_primo = True
            for j in range(2, int(i**0.5)+ 1):
                if i % j == 0:
                    es_primo = False
                    break
            if es_primo:
                suma_pri += i
    return suma_pri

# llamar a las funciones
print("------------Conversiones----------------")
num =  int(input("Ingresa un número decimal: "))
print("Decimal:", num)
print("Binario:", dec_a_bin(num))
print("octal:", dec_a_oct(num))
print("Hexadecimal:", dec_a_hex(num))

print("\n----- Suma de binarios--------------")
bin1 = input("ingrese el primer numero binario: ")
bin2 = input("ingrese el segundo numero binario: ")
print("la suma de los dos numeros binarios en decimal es: ", sum_bin(bin1, bin2))

print("\n ----- conversion de binario a hexadecimal y viceversa-----")
hex_num = input("Ingrese un numero hexadecimal: ")
bin_num = input("Ingrese un numero binario: ")
print("conversion de hexadecimal a binario es: ",hex_a_bin(hex_num))
print("conversion de binario ahexadecimal es: ",bin_a_hex(bin_num))

print("\n---- OPERACIONES BINARIAS-----")
bin_op1 = input("Ingresa el primer binario: ")
bin_op2 = input("Ingresa el segundo binario: ")
print(operacion_binarias(bin_op1, bin_op2))


print("\n----- TABLA DE MULTPLICAR----")
num = int(input("Ingresa el numero para multiplicar: "))
tabla_de_multiplicar(num)




print("\n----- SUMA DE LOS NUMEROS PARES ENTRE 1 Y 50 -------")
resultado = suma_pares(1, 50)
print("La suma de los numeros pares es: ", resultado)

print("\n ----- SUMA DE LOS NUMEROS PRIMOS ENTRE 1 Y 100 -------")
print("El resultado es: ", suma_primos(1, 100))