package URI;

import java.io.IOException;
import java.util.Scanner;

public class URI1007 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int valor = input.nextInt();
        int valor2 = input.nextInt();
        int valor3 = input.nextInt();
        int valor4 = input.nextInt();

        int A = valor * valor2;
        int B = valor3 * valor4;

        int diferenca = A - B;

        System.out.println("DIFERENCA = " + diferenca);
    }
}
