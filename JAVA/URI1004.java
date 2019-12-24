package URI;

import java.io.IOException;
import java.util.Scanner;

public class URI1004 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int value1 = input.nextInt();
        int value2 = input.nextInt();
        int result = value1 * value2;

        System.out.println("PROD = "+result);
    }
}
