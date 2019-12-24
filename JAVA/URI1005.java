package URI;

import java.io.IOException;
import java.util.Scanner;

public class URI1005 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double value1 = input.nextDouble();
        double value2 = input.nextDouble();
        double media = (value1 * 3.5 + value2 * 7.5) / 11;

        System.out.printf("MEDIA = %.5f\n",media);
    }
}
