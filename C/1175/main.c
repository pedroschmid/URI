#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define T 20

int main() {
    srand(time(NULL));

    int N[T];

    printf("PRINTANDO O ARRAY NORMAL:\n");
    for (int i = 0; i < T; i++) {
        N[i] = 1 + rand() % (20 - 1);
    }

    printf("PRINTANDDO O ARRAY INVERTIDO:\n");
    for (int j = 0, k = T; j < T && T > 0; j++, k--) {
        N[k] == N[j];
        printf("N[%i] = %i\n",j, N[j]);
    }

    return 0;
}