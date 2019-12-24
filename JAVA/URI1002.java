package URI;

import java.io.IOException;
import java.util.Scanner;

public class URI1002 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double radius = input.nextDouble();
        double area = 3.14159 * Math.pow(radius,2);

        System.out.printf("A=%.4f%n",area);
        input.close();
    }
}
