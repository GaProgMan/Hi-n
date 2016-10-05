#include <stdio.h>
#include <string.h>
#include <math.h>

/**
 * Hi\n in plain C
 * See: http://esolangs.org/wiki/Hi%5Cn
 * Author: @MarauderXtreme
 */

int main() {
	char eat_pie[7] = "eat pie";
	int i = 1;
	for (i; i < 98; i++) {
		strcpy(eat_pie, "eat pie");
	}

	int count = 1;
	char x[1000000] = "a";
	while (count < 999999) {
		strcat(x, "a");
		count++;
	}

	double squiggly = sqrt(5);

	printf("Hi\n");

	return 0;
}
