package URI;

import java.util.Scanner;
import java.io.IOException;

public class URI1003 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int value1 = input.nextInt();
        int value2 = input.nextInt();
        int result = value1 + value2;

        System.out.println("SOMA = "+result);
    }
}
