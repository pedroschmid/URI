package URI;

import java.io.IOException;
import java.util.Scanner;

public class URI1006 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double nota = input.nextDouble();
        double nota2 = input.nextDouble();
        double nota3 = input.nextDouble();

        double x = nota * 2;
        double y = nota2 * 3;
        double z = nota3 * 5;

        double media = (x+y+z)/10;

        System.out.printf("MEDIA = %.1f%n", media);
    }
}
